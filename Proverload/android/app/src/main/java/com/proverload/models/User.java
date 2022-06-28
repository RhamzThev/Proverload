package com.proverload.models;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class User extends RealmObject {

    @PrimaryKey private ObjectId id;
    @Required private String username;
    @Required private String password;

    private String name;
    private int age;
    private int weight;
    private int height;

    public User() {}

    public User(String username, String password, String name, int age, int weight, int height) {
        this.id = new ObjectId();
        this.username = username;
        this.password = password;

        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    public ObjectId getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
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
