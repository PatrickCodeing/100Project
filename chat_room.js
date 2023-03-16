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
  
function addRoom()
{
      room = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room);

      window.location = "chat_page.html";
}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name - "+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}

getData();

function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}