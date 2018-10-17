// var a, b, soma;

// console.log("Digite dois número para somar: ");
// var a = Number(prompt());
// var b = Number(prompt());
// soma = a + b;

// console.log("Soma de " + a + " + " + b + " = " + soma);


// Module 4: Structuring Data > 4.2 Objects (part 2): properties and methods > Elements, properties and methods
let dog = {
    name: 'Mili',
    bark: function () {
        console.log("AU AU!");
    }
}

console.log("Dog name: " + dog.name);
console.log("What it does: ");
dog.bark();

let dartVader = {
    name: 'Dart Vader',
    race: 'human',
    job: 'villain',
    movieSeries: 'Star Wars',
    talk: function () {
        return 'Come to the dark side, Luke!';
    },
    description: function() {
        return "I'm " + this.name + ", a " + this.race + ", the " + this.job + " from " + this.movieSeries + " movie series.";
    }
}

function descYourself() {
    let p = document.createElement("p");
    p.innerHTML = "Describe yourself: \n" + dartVader.description + "\n" + dartVader.name + " says: " + dartVader.talk();
    document.body.appendChild(p);
    console.log("Describe yourself: \n" + dartVader.description + "\n" + dartVader.name + " says: " + dartVader.talk());
}

descYourself();