function login() {
    if ($('#password').val() === 'visma') {
        $('#main').removeClass('hide');
        $('#login').hide();
    }
    return false;
}

$(function(){
    var input = $('#password');

// Execute a function when the user releases a key on the keyboard
    input.keypress(function (event) {
        // Cancel the default action, if needed
        var keycode = (event.keyCode ? event.keyCode : event.which);
        // Number 13 is the "Enter" key on the keyboard
        if (keycode === 13) {
            // Trigger the button element with a click
            $("#loginBtn").click();
        }
    });


});

