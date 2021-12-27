class Proverload {

}

export class Set {
    static schema = {
        name: "Set",
        properties: {
            _id: "objectId",
            excerciseID: "objectId",
            proverload: "Proverload",
        }
        primaryKey: '_id',
    }
}