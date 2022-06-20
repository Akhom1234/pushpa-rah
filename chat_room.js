const firebaseConfig = {
    apiKey: "AIzaSyDLwiRI1YsQKrwqtXMINoiEoQSKsSYQ4V8",
    authDomain: "class-100pro.firebaseapp.com",
    databaseURL: "https://class-100pro-default-rtdb.firebaseio.com",
    projectId: "class-100pro",
    storageBucket: "class-100pro.appspot.com",
    messagingSenderId: "1088432343201",
    appId: "1:1088432343201:web:d63e51a2b0a4f834f3c8e0"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref,("/").child(room_name).update({
          purpose : "adding room names"
    });

    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
    //Start code
    console.log("Room_Name - " + Room_names);
    row = "< div class ='room_name id="+ Room_names+ "onclick= 'redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML +=row;


    //End code
    });});}
getData();

function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";


}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}



