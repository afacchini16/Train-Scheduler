// event.preventDefault();
  var trainObj = {
		name:"",
		destination:"",
		firstTrainTime:"",
		frequency:0,
	};
 
 var config = {
    apiKey: "AIzaSyDk81LIO4Xh2TSH6ktXFqoRJQ_I7Wt91WA",
    authDomain: "inclass-1c99e.firebaseapp.com",
    databaseURL: "https://inclass-1c99e.firebaseio.com",
    storageBucket: "inclass-1c99e.appspot.com",
    messagingSenderId: "200277728922"
  };
  firebase.initializeApp(config);

		var dataRef = firebase.database();

  
	// firebase.initializeApp(config);

  var database = firebase.database();


  $("#searchBtn").on("click", function(){
	trainObj.name = $("#name").val().trim();
	trainObj.destination = $("#destination").val().trim();
	trainObj.firstTrainTime = $("#firstTrainTime").val().trim();
	trainObj.frequency = $("#frequency").val().trim();
	console.log(trainObj);

	database.ref().push({
		name:trainObj.name,
		destination:trainObj.destination,
		firstTrain:trainObj.firstTrainTime,
		frequency: trainObj.frequency,
		ateAdded: firebase.database.ServerValue.TIMESTAMP


	});
	$("#clearBtn").on("click", function(){
		myDataRef.remove();
	})

    dataRef.ref().on("child_added", function(childSnapshot) {
			console.log(childSnapshot.val().name);
			console.log(childSnapshot.val().destination);
			console.log(childSnapshot.val().firstTrain);
			console.log(childSnapshot.val().frequency);

			$("tbody").append("<tr>")
			$("tbody").append("<td>" + childSnapshot.val().name + "</td>")

		})
	});

	    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
				$("tbody").append(snapshot.val().name);
			});