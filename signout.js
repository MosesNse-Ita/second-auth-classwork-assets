// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq5XdZjh58ct5cdR2O6-eaANdMZPSPVow",
    authDomain: "new-auth-193c0.firebaseapp.com",
    projectId: "new-auth-193c0",
    storageBucket: "new-auth-193c0.appspot.com",
    messagingSenderId: "553523485082",
    appId: "1:553523485082:web:e0f7f525d8782546978223"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

        //is signed in
    } else {
        alert("user not authenticated, kindly login or signup");
        window.location = "index.html";
    }
  });

  //logout function

  let signOutButton = document.getElementById("signout");
  signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("logout clicked");
    auth.signOut();
    alert("Signed out");
    window.location = "./index.html";
  })