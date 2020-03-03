import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCMRH_5DEoNQu9LBFcZSTAq-ELVmQRThZo",
        authDomain: "crown-db-fcf20.firebaseapp.com",
        databaseURL: "https://crown-db-fcf20.firebaseio.com",
        projectId: "crown-db-fcf20",
        storageBucket: "crown-db-fcf20.appspot.com",
        messagingSenderId: "9033974944",
        appId: "1:9033974944:web:4266f5ec06dcc8ae42b5c5",
        measurementId: "G-SDW19H568G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
