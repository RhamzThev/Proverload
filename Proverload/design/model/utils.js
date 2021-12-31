import realm from "./realm";

export default class CRUD {

    static createData(name, properties) {
        realm.write(() => realm.create(name, properties))
    }

    static readData(name, query = null, ...args) {
        var objects = realm.objects(name);

        if(query != null) {
            return objects.filtered(query, ...args)
        } else {
            return objects;
        }
    }

    static updateData() {

    }

    static deleteData() {

    }

    static deleteAllData() {
        realm.write(() => realm.deleteAll());
    }

}
