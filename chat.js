// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDls4JyuN3cTM0punTFadL0_ZHMVQmnJ8k",
    authDomain: "project-accfc.firebaseapp.com",
    databaseURL: "https://project-accfc-default-rtdb.firebaseio.com",
    projectId: "project-accfc",
    storageBucket: "project-accfc.appspot.com",
    messagingSenderId: "489904404640",
    appId: "1:489904404640:web:9afebc3a163939be6ef1c5",
    measurementId: "G-8QGTSZ25J4"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



