import Realm from "realm"

const Excercise = {
    name: "Excercise",
    properties: {
        _id: "objectID",
        name: "string",
    }
}

const Day = {
    name: "Day",
    properties: {
        _id: "objectID",
        name: "string",
        description: "string",
    }
}

const realm = await Realm.open({
    schema: [Day, Excercise]
});

export default realm