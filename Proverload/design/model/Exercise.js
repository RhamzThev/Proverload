export default class Exercise {
    static schema = {
        name: "Exercise",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Exercise: ${this.name}`;
    }

    get ID() {
        return `${this._id}`;
    }

    get getName() {
        return `${this.name}`;
    }

}