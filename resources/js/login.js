function login() {
    if ($('#password').val() === 'visma') {
        $('#main').removeClass('hide');
        $('#login').hide();
    }
    return false;
}
