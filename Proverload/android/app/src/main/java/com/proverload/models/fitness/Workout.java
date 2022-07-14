package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Workout extends RealmObject {
    @PrimaryKey private ObjectId id;
    @Required private String name;
    @Required private ObjectId regimeId;

    public Workout() {}

    public Workout(String name, ObjectId regimeId) {
        this.id = new ObjectId();
        this.name = name;
        this.regimeId = regimeId;
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
