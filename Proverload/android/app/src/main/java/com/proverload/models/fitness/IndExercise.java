package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class IndExercise extends RealmObject {
    @PrimaryKey
    private ObjectId id;
    @Required
    private String name;

    public IndExercise() {}

    public IndExercise(String name) {
        this.id = new ObjectId();
        this.name = name;
    }

    public ObjectId getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
