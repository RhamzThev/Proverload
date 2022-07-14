package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Exercise {
    @PrimaryKey private ObjectId id;
    @Required private ObjectId indExerciseId;
    @Required private ObjectId setId;

    public Exercise() {}

    public Exercise(ObjectId indExerciseId, ObjectId setId) {
        this.id = new ObjectId();
        this.indExerciseId = indExerciseId;
        this.setId = setId;
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
}
