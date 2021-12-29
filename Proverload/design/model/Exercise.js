import Realm from "realm";

export class Exercise {
    static schema = {
        name: "Exercise",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    // CREATE
    static createExercise(name) {
        realm.write(() => {realm.create('Exercise', {_id: new BSON.ObjectId(), name: name,})})
    }

    // READ
    static readExercises() {
        return realm.objects('Exercise')
    }

    // UPDATE

    // DELETE
}