package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Exercise extends RealmObject {
    @PrimaryKey private ObjectId id;
    @Required private ObjectId indExerciseId;
    @Required private ObjectId setId;
    @Required private int sets;
    @Required private int reps;

    public Exercise() {}

    public Exercise(ObjectId indExerciseId, ObjectId setId, int sets, int reps) {
        this.id = new ObjectId();
        this.indExerciseId = indExerciseId;
        this.setId = setId;
        this.sets = sets;
        this.reps = reps;
    }

    public ObjectId getIndExerciseId() {
        return indExerciseId;
    }

    public void setIndExerciseId(ObjectId indExerciseId) {
        this.indExerciseId = indExerciseId;
    }

    public ObjectId getSetId() {
        return setId;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }
}
