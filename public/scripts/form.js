// Submit buttons
document.getElementById("submitForm").addEventListener("click", getInfo);

// This function pulls the name and email from the submit form, creates a JSON,
// and sends the object to the server where it is pushed to an array.
// An alert happens if it was a success
function getInfo(){
    event.preventDefault();
    // Creates the request
    var req = new XMLHttpRequest();

    // Input values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var formObject = new Object();
    formObject = {
        "name": name,
        "email": email
    };

    req.open('POST', 'http://flip2.engr.oregonstate.edu:1337/', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){

          // Success message sent
		      alert('Form Submit Success')

      } else {
        console.log("Error in network request: " + req.statusText);
      }});

    req.send(JSON.stringify(formObject));

};