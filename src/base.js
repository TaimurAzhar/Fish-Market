import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZCAMvWmco9wkfxXknYjRLWxBc7A_HDlU",
  authDomain: "fish-market-da063.firebaseapp.com",
  databaseURL: "https://fish-market-da063.firebaseio.com",
  projectId: "fish-market-da063",
  storageBucket: "fish-market-da063.appspot.com",
  messagingSenderId: "973934217166",
  appId: "1:973934217166:web:d46b3fc52f0ce5e817cd9f"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
