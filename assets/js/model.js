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

let visitors = [
    new Visitor(0, 'Nick', 'Moss', 3853377511, 'nick@me.com', 'address', 'sandy', 'UT', 84005)
]

function modelAddVisitor(visitorArray) {
    visitors.push(new Visitor(visitors.length, visitorArray[0],visitorArray[1],visitorArray[2],visitorArray[3], visitorArray[4], visitorArray[5], visitorArray[6], visitorArray[7]));
}
function modelDeleteVisitor(id) {
    index = findVisitorIndex(id)
    visitors.splice(index, 1)
    renderTable($('#table'), visitors)
    
}
function findVisitor(id) {
    for (let visitor in visitors) {
        if (visitor[id] == id) {
            return visitor
        }
    }
}
function findVisitorIndex(id) {
    for (let visitor in visitors) {
        if (visitors[visitor].id === id) {
            return visitors.indexOf(visitor)
        }
    }
}
