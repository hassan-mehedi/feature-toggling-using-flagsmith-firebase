import { initializeApp } from "firebase/app";
import { getRemoteConfig, getValue, fetchAndActivate, getAll } from "firebase/remote-config";

const firebaseConfig = {
    apiKey: "AIzaSyCcJvJcvsmt3prZ97Z8GGbS_IqJGm7RQ1k",
    authDomain: "feature-toggling-a95cc.firebaseapp.com",
    projectId: "feature-toggling-a95cc",
    storageBucket: "feature-toggling-a95cc.appspot.com",
    messagingSenderId: "35056960092",
    appId: "1:35056960092:web:7af25345e741dfa80bdc99",
    measurementId: "G-085SF5ZLJB",
};

const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);

export { app, remoteConfig };
