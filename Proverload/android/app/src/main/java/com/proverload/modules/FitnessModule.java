package com.proverload.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.proverload.models.fitness.Exercise;
import com.proverload.models.fitness.Regime;
import com.proverload.models.fitness.Set;
import com.proverload.models.fitness.Workout;

import javax.annotation.Nullable;

import io.realm.Realm;

public class FitnessModule extends ReactContextBaseJavaModule {

    public FitnessModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FitnessModule";
    }

    // CREATE


    // READ
    @ReactMethod
    public void readRegime(int regimeId, Promise promise){
        Realm realm = Realm.getDefaultInstance();

        Regime regime = realm.where(Regime.class)
                .equalTo("id", regimeId)
                .findFirst();

        if(regime == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(regime);
        }
    }

    @ReactMethod
    public void readWorkout(int workoutId, Promise promise){
        Realm realm = Realm.getDefaultInstance();

        Workout workout = realm.where(Workout.class)
                .equalTo("id", workoutId)
                .findFirst();

        if(workout == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(workout);
        }
    }

    @ReactMethod
    public void readSet(int setId, Promise promise){
        Realm realm = Realm.getDefaultInstance();

        Set set = realm.where(Set.class)
                .equalTo("id", setId)
                .findFirst();

        if(set == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(set);
        }
    }

    @ReactMethod
    public void readExercise(int exerciseId, Promise promise){
        Realm realm = Realm.getDefaultInstance();

        Exercise exercise = realm.where(Exercise.class)
                .equalTo("id", exerciseId)
                .findFirst();

        if(exercise == null) {
            promise.reject(new Throwable("Nah."));
        } else {
            promise.resolve(exercise);
        }
    }

    // UPDATE

    // DELETE
}
