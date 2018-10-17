let fruitArray = ["apples", "oranges", "bananas", "grapes"];
let person = [
    { givenName: 'Michael', familyName: 'Buffa', age: '51' },
    { givenName: 'Davi', familyName: 'Cunha', age: '21' },
    { givenName: 'Milton', familyName: 'Santos', age: '53' },
    { givenName: 'Darien', familyName: 'Lyons', age: '25' }
]

for (var i = 0; i < fruitArray.length; i++) {
    console.log(fruitArray[i] + " ");
}
console.log(fruitArray.length);
fruitArray.push("watermelon");
console.log(fruitArray);
console.log(fruitArray.length);
for (var i = 0; i <= fruitArray.length; i++) {
    fruitArray.pop();
}
console.log(fruitArray);
console.log(fruitArray.length);

console.log(person[0].givenName + " " + person[0].familyName + " " + person[0].age + "\n"
    + person[1].givenName + " " + person[1].familyName + " " + person[1].age + "\n"
    + person[2].givenName + " " + person[2].familyName + " " + person[2].age + "\n"
    + person[3].givenName + " " + person[3].familyName + " " + person[3].age);

person = person.sort(compareByAge);

console.log(person[0].givenName + " " + person[0].familyName + " " + person[0].age + "\n"
    + person[1].givenName + " " + person[1].familyName + " " + person[1].age + "\n"
    + person[2].givenName + " " + person[2].familyName + " " + person[2].age + "\n"
    + person[3].givenName + " " + person[3].familyName + " " + person[3].age);

function compareByAge(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    }
    return 0;
}

let myarr = ['yellow', 'blue', 'red', 'black', 'white', 'green', 'pink'];

myarr.forEach(function (array) {
    console.log("\n" + array);
});

myArr = myarr.sort();

myArr.forEach(function (array) {
    console.log("\n" + array);
});

let myarr2 = [4, 2, 1, 3, 'one', 'three', 'two', 'four'];

myarr2.forEach(function (array2) {
    console.log("\n" + array2);
});

myarr2.sort();

myarr2.forEach(function (array2) {
    console.log("\n" + array2);
});

myarr2 = myarr2.splice(2, 4);

myarr2.forEach(function (array2) {
    console.log("\n" + array2);
});


// -----NOT WORKING YET-----
// myarr2 = myarr2.pop();

// myarr2.forEach(function(array2) {
//     console.log("\n" + array2);
// });

// myarr2 = myarr2.push("ten");

// myarr2.forEach(function(array2) {
//     console.log("\n" + array2);
// });

function removeChars(s, startIndex, numbersOfCharsToRemove) {
    return s.substring(0, startIndex) + s.substring(startIndex + numbersOfCharsToRemove, s.length);
}

function replaceAt(s, index, letter) {
    return s.substring(0, index) + letter + s.substring(index + 1, s.length);
}

var name = "Michael"

console.log(removeChars(name, 2, 2));
console.log(replaceAt(name, 3, "K"));

var nameArr = ['M', 'i', 'c', 'h', 'a', 'e', 'l'];

nameArr.forEach(function (letters, index) {
    console.log(letters + " index: " + index);
});

console.log("\n");

for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i] + " index: " + i);
}

person.forEach(function (p, index) {
    console.log(p.givenName + " " + p.familyName + " " + p.age + " | index: " + index);
});

person.forEach(function (p, index, arr) {
    console.log(p.givenName + " " + p.familyName + " " + p.age + " | index: " + index + " in the array of " + arr.length + " eleme");
});

let p = person;
console.log(p[0].givenName + " " + person[0].familyName + " | age: " + person[0].age);

for (let i = 0; i < person.length; i++) {
    p = person[i];
    console.log(p.givenName + " " + p.familyName + " | age: " + p.age);
}


//Arrays of object with information about images and its attributes
let pictureArray = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
},
{
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "http://placehold.it/600/8e973b",
    "thumbnailUrl": "http://placehold.it/150/8e973b"
},
{
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "http://placehold.it/600/121fa4",
    "thumbnailUrl": "http://placehold.it/150/121fa4"
},
{
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "http://placehold.it/600/74456b",
    "thumbnailUrl": "http://placehold.it/150/74456b"
},
{
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "http://placehold.it/600/b0931d",
    "thumbnailUrl": "http://placehold.it/150/b0931d"
}
];

pictureArray.forEach(function(currentImage) {
    let image = document.createElement("img");
    image.src = currentImage.thumbnailUrl;
    image.alt = currentImage.title;
    document.body.appendChild(image);
    image.style.margin = "5px";
});

