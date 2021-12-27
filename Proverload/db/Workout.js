export class Workout {
    static schema = {
        name: "Workout",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Workout: _id = ${this._id}, name = ${this.name}`
    }
}