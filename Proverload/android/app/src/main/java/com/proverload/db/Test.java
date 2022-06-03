package com.proverload.db;

import org.bson.types.ObjectId;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Test extends RealmObject {

    @PrimaryKey private ObjectId id;
    @Required private String foo;
    @Required private String bar;

    public Test() {
    }

    public Test(String foo, String bar) {
        this.id = new ObjectId();
        this.foo = foo;
        this.bar = bar;
    }

    public ObjectId getId() {
        return id;
    }

    public String getFoo() {
        return foo;
    }

    public String getBar() {
        return bar;
    }

    public void setFoo(String foo) {
        this.foo = foo;
    }

    public void setBar(String bar) {
        this.bar = bar;
    }

    @Override
    public String toString() {
        return "Test{" +
                "foo='" + foo + '\'' +
                ", bar='" + bar + '\'' +
                '}';
    }
}
