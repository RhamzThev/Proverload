import Realm from "realm";

export class Workout {
    static schema = {
        name: "Workout",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    // CREATE
    static createWorkout(name) {
        realm.write(() => {realm.create('Workout', {_id: new BSON.ObjectId(), name: name,})})
    }

    // READ
    static readWorkouts() {
        return realm.objects('Workout')
    }

    // UPDATE

    // DELETE    

}