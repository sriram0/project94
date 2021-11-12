var firebaseConfig = {
    apiKey: "AIzaSyBT4v6WghfSJzEak0vvKKGGp5Wg5N2FAf8",
    authDomain: "masterchat-34b0b.firebaseapp.com",
    databaseURL: "https://masterchat-34b0b-default-rtdb.firebaseio.com",
    projectId: "masterchat-34b0b",
    storageBucket: "masterchat-34b0b.appspot.com",
    messagingSenderId: "1024815105487",
    appId: "1:1024815105487:web:74cad229fc5f4f1cce7eba"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


$("#nameD").html(`Welcome, ${localStorage.getItem("userN")}`);

var logout= function(){
    localStorage.removeItem("userN");
    localStorage.removeItem("roomN");
    location = "index.html"
}

var add = function(){
    localStorage.setItem("roomN", $("#roomI").val());
    firebase.database().ref("/").child($("#roomI").val()).update({
        reason: "upload data"
    });
    location = "chat.html";
}