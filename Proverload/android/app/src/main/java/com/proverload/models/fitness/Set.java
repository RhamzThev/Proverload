package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Set extends RealmObject {
    @PrimaryKey private ObjectId id;
    @Required private ObjectId workoutId;

    public Set() {}

    public Set(ObjectId workoutId) {
        this.id = new ObjectId();
        this.workoutId = workoutId;
    }

    public ObjectId getId() {
        return id;
    }
}
