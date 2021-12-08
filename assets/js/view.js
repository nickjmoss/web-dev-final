//Renders the table
function renderTable(container, people) {
    //Clear the previous rendering of the table from the DOM
    $('#my-table').remove() 

    //Append the initial table header
    container.append(
        `<table id='my-table'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
         </table>`
    )
    
    //Loop through the visitors in the visitors array and concatenate
    //their name and address together, save them as variables and append
    //those variables to the table
    for (let i in people) {
        let fullName = `${people[i].firstName} ${people[i].lastName}`
        let fullAddress = `${people[i].address}\n${people[i].city}, ${people[i].state} ${people[i].zip}`
        let email = `${people[i].email}`
        let phone = `${people[i].phone}`
        let id = `${people[i].id}`
        
        $('table').append(
            `<tr>
                <td id="id">${id}</td>
                <td>${fullName}</td>
                <td>${fullAddress}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>
                    <a href="#" onclick="modelDeleteVisitor(${id})"><i class="fas fa-trash"></i></a>
                </td>
            </tr>`
        )

    }
}

//Show the table
function showVisitors() {
    $('#visitor-container').toggleClass('active')
    $('#form-close').toggleClass('active');
    $('body').toggleClass('noScroll');
    $('#menu-icon').toggleClass('hide');
}

//Show the table
function showList() {
    $('#whole-form-container').hide()
    $('#visitor-list-container').show()
}

//Show the new visitor form
function showForm() {
    $('#whole-form-container').show()
    $('#visitor-list-container').hide()
}

//Clear the form
function clearForm() {
    $('input').val("");
    $('textarea').val("");
    $(':input').attr('class', '')
    $('input[type="checkbox"]').prop('checked', false);
    $('#submit').val("Submit")
}

//function when the user closes the form
function closeForm() {
    $('#visitor-container').toggleClass('active');
    $('#form-close').toggleClass('active');
    $('body').toggleClass('noScroll');
    $('#menu-icon').toggleClass('hide');
    $(".thanks-message").hide();
    clearForm();
}
