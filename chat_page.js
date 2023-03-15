var firebaseConfig = {
      apiKey: "AIzaSyAJJaCpFyy73yGCHGSy0fawKAcgf6CH3aU",
      authDomain: "kwitter-ee4da.firebaseapp.com",
      databaseURL: "https://kwitter-ee4da-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee4da",
      storageBucket: "kwitter-ee4da.appspot.com",
      messagingSenderId: "384778011369",
      appId: "1:384778011369:web:bc20e219c861fb8e4d2678"
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
function back()
{

window.location = "chat_room.html";
}