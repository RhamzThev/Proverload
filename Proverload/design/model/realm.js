import Realm from 'realm'; 

import Circuit from "./Circuit";
import Exercise from "./Exercise";
import Proverload from "./Proverload";
import Workout from "./Workout";

export default new Realm({
    schema: [
        Circuit,
        Exercise,
        Proverload,
        Workout,
    ],
    schemaVersion: 1,
})
