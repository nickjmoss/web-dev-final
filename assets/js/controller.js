//Document ready function
$(function() {
    // Menu button function, opens the menu for mobile
    $('#menu-icon').click(function() {
        $('#menu-icon').toggleClass('active');
        $('#modal').toggleClass('active');
        $('body').toggleClass('noScroll');
    });

    // Opens the form modal for logging info
    $('#login-button').click(function() {
        renderTable($('#table'), visitors)
        showVisitors()
    });

    // Function that happens when the form is closed
    $('.new-form-close').click(function() {
        clearForm();
        closeForm();
        showList();
    });

    // Function that happens when the form is closed
    $('#go-back').click(function() {
        if (confirm("Leave this form? You're changes will not be saved.")) {
            showList();
            clearForm();
        }
        else {
            //do nothing
        }
    });

    $('#new-visitor-button').click(function() {
        showForm();
    })

    // Function to initiate dark mode
    // Makes use of Local Storage to maintain the theme previously selected
    $('#dark-mode-button').click(function() {
        if (localStorage.getItem('theme') == 'dark') {
            $("link[rel='stylesheet'][href$='dark-mode.css']").remove();
            localStorage.setItem('theme', '')
            $('#theme-icon').removeClass()
            $('#theme-icon').addClass('far fa-sun')

        }
        else{
            $("<link rel='stylesheet' href='assets/css/dark-mode.css'>").appendTo("head");
            localStorage.setItem('theme', 'dark')
            $('#theme-icon').removeClass()
            $('#theme-icon').addClass('far fa-moon')
        }
    });

});

//Function that gets the values of the form on submit
function submitForm(){
    let $inputs = $('form :input');
    let values = []
    $inputs.each(function() {
        values.push($(this).val())
    });
    let newValues = []
    for (let i = 0; i < 8; i++) {
        newValues.push(values[i])
    }
    modelAddVisitor(newValues);
    renderTable($('#table'), visitors)
    showList();
    clearForm();
};