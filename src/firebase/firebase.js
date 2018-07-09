import firebase from 'firebase';

    const config = {
        apiKey: "AIzaSyD97C4PowGXDT5oLyNNBvhB1ZESeIaMmXc",
        authDomain: "adiletsblog.firebaseapp.com",
        databaseURL: "https://adiletsblog.firebaseio.com",
        projectId: "adiletsblog",
        storageBucket: "adiletsblog.appspot.com",
        messagingSenderId: "906884002668"
    };
    firebase.initializeApp(config);

export default firebase;
