class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class ContactManager {
    constructor() {
        this.listOfContacts = [];
    }

    add(contact) {
        this.listOfContacts.push(contact)
    }

    remove(contact) {
        for (let i = 0; i < this.listOfContacts.length; i++) {
            let c = this.listOfContacts[i];

            if (c.firstName === contact.firstName) {
                this.listOfContacts.splice(i, i);
                break;
            }
        }
    }

    printContactToConsole() {
        this.listOfContacts.forEach((list) => {
            console.log(list);
        });
    }

    contactIndex(contactInfo) {
        // ALGORITH TO SEARCH THE CONTACT BY NAME, LAST NAME, PHONE NUMBER AND EMAIL ADDRESS
        let index = [];  
        // let found = false;

        for (let i = 0; i < this.listOfContacts.length; i++) {
            let properties = Object.keys(this.listOfContacts[i]);
            for (let j = 0; j < properties.length; j++) {
                let info = this.listOfContacts[i][properties[j]];

                if (info === contactInfo) {
                    index.push(i);
                    // found = true;
                    break;
                }
            }

            // if(found) {
            //     break;
            // }
        }

        if (index === undefined) {
            return -1;
        }
        return index;
    }

    findContact(contactInfo) {
        // IMPORTANT
        // CREATE METHODS FIND THE CONTACT BY INDEX NUMBER
        let index = this.contactIndex(contactInfo);
        console.log(index);
    }
}

let inputs = document.querySelectorAll(".inputDiv input");
let submitBtn = document.querySelector("#submitBtn");
let contact;
let contactManager = new ContactManager();

submitBtn.addEventListener('click', () => {
    let arr = [];
    inputs.forEach((input) => {
        arr.push(input.value);
        input.value = "";
    });

    contact = new Contact(arr[0], arr[1], arr[2], arr[3]);
    contactManager.add(contact);
});

let search = document.querySelector(".searchNameDiv #search");
let searchBtn = document.querySelector(".searchNameDiv #searchBtn");

searchBtn.addEventListener('click', () => {
    contactManager.findContact(search.value);
    search.value = "";
});