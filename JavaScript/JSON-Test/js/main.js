// LOCAL OBJECT ACCESS

// Object Array
let anArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Parses the object 'anArray' into a JSON String
let JSONFormat = JSON.stringify(anArray);
// Complex JavaScript object
let complexObject = {
    name: 'Metallica',
    album: [
        {
            name: "Master of Puppets",
            year: 1986
        },
        {
            name: "Black Album",
            year: 1991
        }
    ]
};

console.log(typeof (anArray))
console.log(anArray);
console.log(typeof (JSONFormat))
console.log(JSONFormat);

console.log("Keys: " + Object.keys(complexObject));

JSONFormat = JSON.stringify(complexObject);
console.log(typeof (JSONFormat));
console.log(JSONFormat);

// Parses JSON which is a JSON String into a JavaScript Object and allows its properties to be accessed 
let JSONObject = JSON.parse(JSONFormat);
console.log(JSONObject.name);

// REMOTE JSON ACCESS

// Access a JSON file from the web and parses it into a JavaScript object
function search() {
    // The url where the JSON it is been requested
    let queryUrl = "https://jsonplaceholder.typicode.com/users";
    // Object with the method that allows to request the JSON file
    let xhr = new XMLHttpRequest();
    // Method to get the JSON file
    xhr.open('GET', queryUrl, true);
    // On JSON file load do something
    xhr.onload = (e) => {
        let users = JSON.parse(xhr.response);
        displayUsersAsTable(users);
    }
    xhr.send();
}

// Advanced Search
function advancedSearch() {
    let queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL).then((response) => {
        // response.json() returns a json string, returning it will convert it
        // to a pure JavaScript object for the next then's callback
        return response.json();
    }).then((users) => {
        // users is a JavaScript object here
        displayUsersAsTable(users);
    }).catch((err) => {
        console.log("Error during fetching: " + err.message);
    });
}

function displayUsersAsTable(users) {
    let userDiv = document.querySelector("#users");
    let table = document.createElement("table");
    let row = table.insertRow();

    userDiv.innerHTML = "";

    row.innerHTML += "<th>Id</th><th>Name</th><th>Username</th><th>Email</th>"
    users.forEach((currentUser) => {
        console.log(currentUser.name);
        let row2 = table.insertRow();
        row2.innerHTML += "<td>" + currentUser.id + "</td><td>" + currentUser.name + "</td><td>" + currentUser.username + "</td><td>" + currentUser.email + "</td>";
    });
    userDiv.appendChild(table);
}

// LOCAL STORAGE 

localStorage.lastName = "Bunny";
localStorage.firstName = "Bugs";
localStorage.location = "Earth";
sessionStorage.lastName = "the Martian";
sessionStorage.firstName = "Marvin";
sessionStorage.location = "Mars";

let localStorageArray = [localStorage.lastName, localStorage.firstName, localStorage.location];
let sessionStorageArray = [sessionStorage.lastName, sessionStorage.firstName, sessionStorage.location];
localStorageArray.forEach((local) => {
    console.log("localStorage: " + local);
});

sessionStorageArray.forEach((local) => {
    console.log("sessionStorage: " + local);
});