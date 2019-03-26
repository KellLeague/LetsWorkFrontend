import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbF30FB7QQy84S1KHoiIXGfJ9N6KXeRw0",
    authDomain: "uploader-2ab1b.firebaseapp.com",
    databaseURL: "https://uploader-2ab1b.firebaseio.com",
    projectId: "uploader-2ab1b",
    storageBucket: "uploader-2ab1b.appspot.com",
    messagingSenderId: "367968213302"
};

app.initializeApp(config);

export default app;