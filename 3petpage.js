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




pet_name = localStorage.getItem("pet_name");
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("pet_name");
  typeofpet = localStorage.getItem("typeofpet");
  typeofbreed = localStorage.getItem("typeofbreed");
  ageofpet = localStorage.getItem("ageofpet");
  lastseenwhen = localStorage.getItem("lastseenwhen");
  contactwhere = localStorage.getItem("contactwhere");







function sendetails()
{
  

  msg = document.getElementById("msg").value;

  firebase.database().ref(pet_name).push({
    name:user_name,
    message:msg,
    pet_name: pet_name,
    typeofpet:typeofpet,
    typeofbreed:typeofbreed,
    ageofpet:ageofpet,
    lastseenwhen:lastseenwhen,
    contactwhere:contactwhere,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() 
{ firebase.database().ref("/"+pet_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
  { childKey  = childSnapshot.key;
     childData = childSnapshot.val();
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);

	       pet_name = message_data['pet_name'];
	       message = message_data['message'];
         like = message_data['like'];
         typeofpet = message_data['typeofpet'];
	       typeofbreed = message_data['typeofbreed'];
         ageofpet = message_data['ageofpet'];
         lastseenwhen=message_data['lastseenwhen'];
         contactwhere=message_data['contactwhere'];
         user_name=message_data['name'];
   
  


         console.log(pet_name);
         console.log(message);
         console.log(like);
         console.log(typeofpet);
         console.log(typeofbreed);
         console.log(ageofpet);
         console.log(lastseenwhen);
         console.log(contactwhere);
         console.log(user_name)





         username_with_tag = "<h4><b> Pet-Owner Name:</b> "+ user_name +"<img class='user_tick' src='tick.png'></h4><br>";
         name_with_tag = "<h4><b> Pet Name:</b> "+ pet_name +"</h4>";
         message_with_tag = "<h4><b> Message for your finders:</b> " + message + "</h4>";
         type_with_tag = "<h4><b> Type of your pet:</b> " + typeofpet + "</h4>";
         breed_with_tag = "<h4><b>Breed: </b>" + typeofbreed + "</h4>";
         age_with_tag = "<h4><b>Age:</b> " + ageofpet + "</h4>";
         message_with_lastseen = "<h4 > <b>Last seen: </b>" + lastseenwhen + "</h4>";
         message_with_contact = "<h4><b>Contact: </b>" + contactwhere + "</h4><br>";


         like_button ="<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Who will support?: "+ like +"</span></button><hr>";

        row = username_with_tag+name_with_tag + message_with_tag +type_with_tag+breed_with_tag+age_with_tag+message_with_lastseen+message_with_contact+like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("pet_name");
window.location.replace("1mainpage.html");
}
