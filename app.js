  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBq5XdZjh58ct5cdR2O6-eaANdMZPSPVow",
    authDomain: "new-auth-193c0.firebaseapp.com",
    projectId: "new-auth-193c0",
    storageBucket: "new-auth-193c0.appspot.com",
    messagingSenderId: "553523485082",
    appId: "1:553523485082:web:e0f7f525d8782546978223"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

//signup function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
    // prevent default form submission behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        alert("user signed up successful");

        //signed in
        var user = userCredential.user;
        console.log("user, user.email");
    })

    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", error);
        alert(errorMessage);
    });
});

//Sign in Function
let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});
