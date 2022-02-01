// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDLM-bqWWNShD8eh2_CVCbmBpQpXVfVxcE",
      authDomain: "kwitter2-d4f64.firebaseapp.com",
      projectId: "kwitter2-d4f64",
      storageBucket: "kwitter2-d4f64.appspot.com",
      messagingSenderId: "394678418073",
      appId: "1:394678418073:web:c1a085f90b4e0028dad608"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
