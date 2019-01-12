import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Initialize Firebase
var config = {
	apiKey: "AIzaSyD7Qddno-U721h2H9Z4-H9LxvIGL9EYSwM",
	authDomain: "fir-marioplan-af34f.firebaseapp.com",
	databaseURL: "https://fir-marioplan-af34f.firebaseio.com",
	projectId: "fir-marioplan-af34f",
	storageBucket: "fir-marioplan-af34f.appspot.com",
	messagingSenderId: "441137741382"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
