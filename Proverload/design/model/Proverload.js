export default class Proverload {

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

}