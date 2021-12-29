import Realm from "realm";

export class Proverload {

    static schema = {
        name: "Proverload",
        properties: {
            _id: "objectId",
            circuitId: "objectId",
            exerciseId: "objectId",
            proverload: "int[]",
        },
        primaryKey: '_id',
    }

    // CREATE

    // READ

    // UPDATE

    // DELETE

}