export default class Workout {
    static schema = {
        name: "Workout",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Workout: ${this.name}`;
    }

    get ID() {
        return `${this._id}`;
    }

    get getName() {
        return `${this.name}`;
    }
}