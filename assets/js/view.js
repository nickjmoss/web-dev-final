function renderTable(container, people) {
    $('#my-table').remove() 

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
                <td>${email}</td>
                <td>${phone}</td>
                <td>
                    <a href="#" onclick="modelDeleteVisitor(${id})"><i class="fas fa-trash"></i></a>
                    <a href="#" onclick="modelEditVisitor(${id})"><i class="fas fa-edit"></i></a>
                </td>
            </tr>`
        )

    }
}

function showVisitors() {
    $('#visitor-container').toggleClass('active')
    $('#form-close').toggleClass('active');
    $('body').toggleClass('noScroll');
    $('#menu-icon').toggleClass('hide');
}

function showList() {
    $('#whole-form-container').hide()
    $('#visitor-list-container').show()
}

function showForm() {
    $('#whole-form-container').show()
    $('#visitor-list-container').hide()
}

function clearForm() {
    $('input').val("");
    $('textarea').val("");
    $(':input').attr('class', '')
    $('input[type="checkbox"]').prop('checked', false);
    $('#submit').val("Submit")
}

function closeForm() {
    $('#visitor-container').toggleClass('active');
    $('#form-close').toggleClass('active');
    $('body').toggleClass('noScroll');
    $('#menu-icon').toggleClass('hide');
    $(".thanks-message").hide();
    clearForm();
}
