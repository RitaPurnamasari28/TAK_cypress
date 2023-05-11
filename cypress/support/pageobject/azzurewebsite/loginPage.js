const loginInput = require('../../../fixtures/azzurewebsite/login.json')

class loginPage{
        loginMenu = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
        username = '#Username'
        password = '#Password'
        loginBtn = '.btn-primary'
        usernameRequiredMessage = '.field-validation-error'
        wrongPasswordorUsernameMessage = '.alert-danger'
        loginSuccessMessage = 'h3'
}

export default loginPage;