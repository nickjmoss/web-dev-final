//Visitor Object that contains values from form
class Visitor {
    constructor(id, firstName, lastName, phone, email, address, city, state, zip) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    
}

//Array of visitor objects
let visitors = [];

//Adds visitor to the visitors array
function modelAddVisitor(visitorArray) {
    visitors.push(new Visitor(visitors.length, visitorArray[0],visitorArray[1],visitorArray[2],visitorArray[3], visitorArray[4], visitorArray[5], visitorArray[6], visitorArray[7]));
}

//Deletes a visitor, asks for confirmation
function modelDeleteVisitor(id) {
    if (confirm("Delete this visitor?")) {
        index = findVisitorIndex(id)
        visitors.splice(index, 1)
        renderTable($('#table'), visitors)
    }
    
}

//Returns the index of the visitor in the visitors array
function findVisitorIndex(id) {
    for (let visitor in visitors) {
        if (visitors[visitor].id === id) {
            return visitors.indexOf(visitor)
        }
    }
}
