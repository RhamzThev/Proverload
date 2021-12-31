export default class Proverload {

    static schema = {
        name: "Proverload",
        properties: {
            _id: "objectId",
            circuitId: "objectId",
            exerciseId: "objectId",
            proverload: "string",
        },
        primaryKey: '_id',
    }

    get toString() {
        return `Proverload - Circuit ID: ${this.circuitId}, Exercise ID: ${this.exerciseId}`;
    }

    get ID() {
        return `${this._id}`;
    }

    get circuitID() {
        return `${this.circuitId}`;
    }

    get exerciseID() {
        return `${this.exerciseId}`;
    }

    get getProverload() {
        return `${this.proverload}`;
    }
}