package com.proverload.modules;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.proverload.models.User;

import io.realm.Realm;
import io.realm.RealmConfiguration;

public class UserModule extends ReactContextBaseJavaModule {

    public UserModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() { return "UserModule"; }

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

    /**
     * Attempts to log in user with given credentials.
     *
     * @param username  The attempted username.
     * @param password  The attempted password.
     * @return  true if user can be logged in. false if otherwise.
     */
    @ReactMethod
    public boolean logIn(String username, String password) {
        // OPEN REALM
        String realmName = "Proverload";
        RealmConfiguration configuration = new RealmConfiguration.Builder().name(realmName).build();
        Realm realm = Realm.getInstance(configuration);

        // Check if username and password is correct
        if (userExists(username, realm)) {
            realm.close();
            return validCredentials(username, password, realm);
        }
        realm.close();
        return false;
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
    public void createUser(String username, String password, String name, int age, int weight, int height) {
        //OPEN REALM
        String realmName = "Proverload";
        RealmConfiguration configuration = new RealmConfiguration.Builder().name(realmName).build();
        Realm realm = Realm.getInstance(configuration);

        // Create User object
        User user = new User(username, password, name, age, weight, height);

        // Add created user to the database
        realm.executeTransaction(transactionRealm -> {
            transactionRealm.insert(user);
        });

        // Log the created user in.
        logIn(username, password);

        // CLOSE REALM
        realm.close();
    }

}
