package com.proverload.db;

import io.realm.Realm;
import io.realm.RealmConfiguration;

public class Database {

    private static RealmConfiguration configuration;
    private static Realm realm;

    /**
     * Opens a new realm.
     *
     * @return The instance of the opened realm.
     */
    private static Realm openRealm() {
        String realmName = "Proverload";
        configuration = new RealmConfiguration.Builder().name(realmName).build();
        realm = Realm.getInstance(configuration);

        return realm;
    }

    /**
     * Closes the given realm.
     */
    private static void closeRealm() {
        realm.close();
    }

    /**
     * Executes the given transaction in the realm.
     *
     * @param transaction   The transaction to be executed.
     */
    public static void executeTransaction(Realm.Transaction transaction) {
        openRealm();
        realm.executeTransaction(transaction);
        closeRealm();
    }

    public static void deleteRealm() {
        Realm.deleteRealm(configuration);
    }

}
