
const firebaseConfig = {
  apiKey: "AIzaSyAFcgB5Wlhy22oVxzSbuBjsVOSNVRAYpek",
  authDomain: "pet-finder-app-dd85f.firebaseapp.com",
  databaseURL: "https://pet-finder-app-dd85f-default-rtdb.firebaseio.com",
  projectId: "pet-finder-app-dd85f",
  storageBucket: "pet-finder-app-dd85f.appspot.com",
  messagingSenderId: "98327551713",
  appId: "1:98327551713:web:7c21b3afe932f057eb21a0"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome! " + user_name;
function send() {
  head = document.getElementById("head").value;
  animal = document.getElementById("name").value;
  time = document.getElementById("time").value;
  date = document.getElementById("date").value;
  contact = document.getElementById("contact").value;
  email = document.getElementById("email").value;
  city = document.getElementById("city").value;
  address = document.getElementById("address").value;
  tag_info = head + animal + time + date + contact + email + city + address;
  firebase.database().ref(tag_info).push({
    case: head,
    name: animal,
    time: time,
    date: date,
    contact: contact,
    email: email,
    city: city,
    address: address
  })
  localStorage.setItem("tag_info", tag_info);
  window.location("ReplyPage.html");  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function logout() {
  window.location = "index.html";
}