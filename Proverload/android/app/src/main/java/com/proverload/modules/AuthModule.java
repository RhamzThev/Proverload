package com.proverload.modules;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.proverload.models.auth.User;

import io.realm.Realm;

public class AuthModule extends ReactContextBaseJavaModule {

    public AuthModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() { return "AuthModule"; }

    /**
     * Determines if user with given username exists.
     *
     * @param username  The attempted username.
     * @param realm     The opened realm.
     * @return          true if a user with the given username exists in the realm. false if otherwise.
     */
    private boolean userExists(String username, Realm realm) {
        return realm.where(User.class)
                .equalTo("username", username)
                .findFirst() != null;
    }

    /**
     * Determines if a user with the given credentials exists.
     *
     * @param username  The attempted username.
     * @param password  The attempted password.
     * @param realm     The opened realm.
     * @return          true if the user credentials are valid. false if otherwise.
     */
    private boolean validCredentials(String username, String password, Realm realm) {
        return realm.where(User.class)
                .equalTo("username", username)
                .and()
                .equalTo("password", password)
                .findFirst() != null;
    }

    @ReactMethod
    public void name(String username, Promise promise) {
        // OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        User user = realm.where(User.class)
                .equalTo("username", username)
                .findFirst();

        if(user == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(user.getName());
        }
    }

    @ReactMethod
    public void age(String username, Promise promise) {
        // OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        User user = realm.where(User.class)
                .equalTo("username", username)
                .findFirst();

        if(user == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(user.getAge());
        }
    }

    @ReactMethod
    public void weight(String username, Promise promise) {
        // OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        User user = realm.where(User.class)
                .equalTo("username", username)
                .findFirst();

        if(user == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(user.getWeight());
        }
    }

    @ReactMethod
    public void height(String username, Promise promise) {
        // OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        User user = realm.where(User.class)
                .equalTo("username", username)
                .findFirst();

        if(user == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(user.getHeight());
        }
    }

    /**
     * Attempts to log in user with given credentials.
     *
     * @param username  The attempted username.
     * @param password  The attempted password.
     * @return  true if user can be logged in. false if otherwise.
     */
    @ReactMethod
    public void logIn(String username, String password, Promise promise) {
        // OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        // Check if username and password is correct
        if (userExists(username, realm)) {
            System.out.println("LOG IN:  Yeah, you passed!");
            promise.resolve(validCredentials(username, password, realm));
        }
        System.out.println("LOG IN: Hey, you failed.");
        promise.resolve(false);
    }

    /**
     * Creates user with the given information, and logs in created user.
     *
     * @param username  The username of the created user.
     * @param password  The password of the created user.
     * @param age       The age of the created user.
     * @param weight    The weight of the created user.
     * @param height    The height of the created user.
     */
    @ReactMethod
    public void signUp(String username, String password, String name, int age, int weight, int height, Promise promise) {
        //OPEN REALM
        Realm realm = Realm.getDefaultInstance();

        // IF USERNAME DOES NOT EXIST
        if (!userExists(username, realm)) {
            // Create User object
            User user = new User(username, password, name, age, weight, height);

            // Add created user to the database
            realm.executeTransaction(transactionRealm -> {
                transactionRealm.insert(user);
            });


            // Log the created user in.
            System.out.println("SIGN UP: Yeah, you passed!");
            promise.resolve(true);
        }

        // CLOSE REALM

        System.out.println("SIGN UP: Hey, you failed.");
        promise.resolve(false);


    }

}
