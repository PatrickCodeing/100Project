
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