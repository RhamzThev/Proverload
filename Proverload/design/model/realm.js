import Realm from 'realm'; 

import Circuit from "./Circuit";
import Exercise from "./Exercise";
import Proverload from "./Proverload";
import Workout from "./Workout";

const realm = new Realm({
    schema: [
        Circuit,
        Exercise,
        Proverload,
        Workout,
    ]
})

export default realm;