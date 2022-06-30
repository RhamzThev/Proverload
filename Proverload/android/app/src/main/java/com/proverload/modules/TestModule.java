package com.proverload.modules;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.proverload.db.Test;

import android.util.Log;

import io.realm.Realm;
import io.realm.RealmConfiguration;
import io.realm.RealmResults;

public class TestModule extends ReactContextBaseJavaModule {

    public TestModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestModule";
    }


    @ReactMethod
    public void testEvent() {
        Log.i("TestModule", "TESTING EVENT.");
    }

    @ReactMethod
    public void testDatabase(){

        String realmName = "Test Project";
        RealmConfiguration configuration = new RealmConfiguration.Builder().name(realmName).build();
        Realm realm = Realm.getInstance(configuration);

        // CREATE
        Test test = new Test("Read Test", "SUCCESSFUL");
        realm.executeTransaction(transactionRealm -> {
            transactionRealm.insert(test);
        });

        // READ
        RealmResults<Test> readTests = realm.where(Test.class).findAll();
        Test readTest = readTests.get(0);
        Log.i("Testing Read...", readTest.toString());

        // UPDATE
        realm.executeTransaction(transactionRealm -> {
            Test update = transactionRealm.where(Test.class).equalTo("id", readTest.getId()).findFirst();
            update.setFoo("Update Test");
        });

        RealmResults<Test> updateTests = realm.where(Test.class).findAll();
        Test updateTest = updateTests.get(0);
        Log.i("Testing Update...", updateTest.toString());

        // DELETE
        realm.executeTransaction(transactionRealm -> {
            Test delete = transactionRealm.where(Test.class).equalTo("id", readTest.getId()).findFirst();
            delete.deleteFromRealm();
        });

        RealmResults<Test> deleteTests = realm.where(Test.class).findAll();
        Log.i("Testing Delete...", deleteTests.toString());

        realm.close();
        Realm.deleteRealm(configuration);
    }

    @ReactMethod
    public void deleteRealm() {
        Realm realm = Realm.getDefaultInstance();
        realm.close();

        String realmName = "Proverload";
        RealmConfiguration configuration = new RealmConfiguration.Builder().name(realmName).build();
        Realm.deleteRealm(configuration);
    }

    @ReactMethod
    public void findDir() {
        Realm realm = Realm.getDefaultInstance();
        Log.i("Realm Directory", realm.getPath());
    }
}
