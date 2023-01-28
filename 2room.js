
//ADD YOUR FIREBASE LINKS
var firebaseConfig =  {
  apiKey: "AIzaSyAUMztT9KofG_KjTTfS7cbzjpxJYnoiCn4",
  authDomain: "petproject-6bad1.firebaseapp.com",
  databaseURL: "https://petproject-6bad1-default-rtdb.firebaseio.com",
  projectId: "petproject-6bad1",
  storageBucket: "petproject-6bad1.appspot.com",
  messagingSenderId: "811969942350",
  appId: "1:811969942350:web:f8b2aa99fb4778391f441f",
  measurementId: "G-F1F7YFCMKT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



 user_name = localStorage.getItem("user_name");

document.getElementById("h3user_name").innerHTML = "Welcome " + user_name + "!";

getData();


function Postad()
{
  pet_name = document.getElementById("petname").value;
  typeofpet=document.getElementById("pettype").value;
  typeofbreed=document.getElementById("breed").value;
  ageofpet=document.getElementById("age").value;
  lastseenwhen=document.getElementById("lastseen").value;
  contactwhere=document.getElementById("contact").value;
  

  firebase.database().ref("/").child(pet_name).update({
    purpose : "adding room name"
  });

  
  localStorage.setItem("user_name", user_name);
    localStorage.setItem("pet_name", pet_name);
    localStorage.setItem("typeofpet", typeofpet);
    localStorage.setItem("typeofbreed", typeofbreed);
    localStorage.setItem("ageofpet", ageofpet);
    localStorage.setItem("lastseenwhen", lastseenwhen);
    localStorage.setItem("contactwhere", contactwhere);
    
  

    
    window.location = "3petpage.html";
}

function getData() 
{ 
   firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function(childSnapshot)
  { childKey  = childSnapshot.key;
       Pet_names = childKey;

      console.log("Pet Name - " + Pet_names);
      row = "<div class='room_name' id="+Pet_names+" onclick='redirectToPetName(this.id)' >#"+ Pet_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });

}



function redirectToPetName(name)
{
  console.log(name);
  localStorage.setItem("Pet_name", petname);
    window.location = "3petpage.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("pet_name");
    window.location = "1mainpage.html";
}
