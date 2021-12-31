export default class Circuit {
    static schema = {
        name: "Circuit",
        properties: {
            _id: "objectId",
            workoutId: "objectId",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Set - ID: ${this._id}, Workout ID: ${this.workoutId}`;
    }

    get ID() {
        return `${this._id}`;
    }
}