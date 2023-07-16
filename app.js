
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzU3W1aY0lPl6vd9jzxBmM8gKVMVHcTsc",
  authDomain: "file-store-9ebe4.firebaseapp.com",
  projectId: "file-store-9ebe4",
  storageBucket: "file-store-9ebe4.appspot.com",
  messagingSenderId: "500064140759",
  appId: "1:500064140759:web:0a73de09967c990c2c1f92"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



let register = document.getElementById("register_btn");

register.addEventListener("click", () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let password = document.getElementById("password");


  let userData = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    password: password.value
  }


  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      try {
        const docRef = await addDoc(collection(db, "users"), {
          ...userData,
          uid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "errorMessage")

    });
})


let getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>` , doc.data());
  });

}
getAllUsers()


