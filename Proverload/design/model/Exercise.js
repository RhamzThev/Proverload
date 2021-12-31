export default class Exercise {
    static schema = {
        name: "Exercise",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

}