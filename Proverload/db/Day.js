
export class Day {
    static ID = 0;
    static schema = {
        name: "Day",
        properties: {
            _id: "objectId",
            name: "string",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Day: _id = ${this._id}, name = ${this.name}`
    }
}