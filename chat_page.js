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

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
message_with = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button<hr>";

row = name_with + message_with + like_button + span_with;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      likes = document.getElementById(message_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}

function back()
{

window.location = "chat_room.html";
}