

  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
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




let register = document.getElementById("register_btn");

register.addEventListener("click", ()=>{
    let name =document.getElementById("name");
    let phone =document.getElementById("phone");
    let email =document.getElementById("email");
    let password =document.getElementById("password");


    let user = {
        name : name.value,
        phone : phone.value,
        email : email.value,
        password : password.value
    }
    console.log(user);
 


    createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
     const user = userCredential.user;
     console.log(user, "user")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage , "errorMessage")
    
  });
})