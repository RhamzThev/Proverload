package com.proverload.models;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class User extends RealmObject {

    @PrimaryKey private ObjectId id;

    @Required private String username;
    @Required private String password;

    @Required private int age;
    @Required private int weight;
    @Required private int height;

    public User(String username, String password, int age, int weight, int height) {
        this.id = new ObjectId();
        this.username = username;
        this.password = password;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    @Override
    public String toString() {
        return "User{" +
                "username=" + username +
                ", password=" + password +
                ", age=" + age +
                ", weight=" + weight +
                ", height=" + height +
                '}';
    }
}
