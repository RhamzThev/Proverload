package com.proverload.modules;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.proverload.db.Database;
import com.proverload.models.User;

public class UserModule extends ReactContextBaseJavaModule {

    public UserModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() { return "UserModule"; }

    @ReactMethod
    public void logIn(String username, String password) {
        // Check if username and password is correct
        // If correct, log user in
        // If incorrect, return error message.
    }

    /**
     * Creates user with the given information.
     *
     * @param username  The username of the created user.
     * @param password  The password of the created user.
     * @param age       The age of the created user.
     * @param weight    The weight of the created user.
     * @param height    The height of the created user.
     */
    @ReactMethod
    public void createUser(String username, String password, int age, int weight, int height) {
        // Create User object
        User user = new User(username, password, age, weight, height);

        // Add created user to the database
        Database.executeTransaction(transactionRealm -> {
            transactionRealm.insert(user);
        });

        // Log the created user in.
        logIn(username, password);
    }

}
