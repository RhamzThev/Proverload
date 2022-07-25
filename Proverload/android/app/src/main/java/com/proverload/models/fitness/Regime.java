package com.proverload.models.fitness;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Regime extends RealmObject {
    @PrimaryKey
    private ObjectId id;
    @Required
    private String name;
    private String description;

    public Regime() {}

    public Regime(String name) {
        this.name = name;
    }

    public Regime(String name, String description) {
        this.id = new ObjectId();
        this.name = name;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
