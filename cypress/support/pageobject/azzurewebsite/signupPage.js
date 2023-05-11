const signupInput = require('../../../fixtures/azzurewebsite/signup.json')

class signupPage{
        signupMenu = '.form-inline > .navbar-nav > :nth-child(1) > .nav-link'
        firstName = '#FirstName'
        surname = '#Surname'
        epost = '#E_post'
        mobile = '#Mobile'
        username = '#Username'
        password = '#Password'
        confirmPassword = '#ConfirmPassword'
        submitBtn = '#submit'
        firstnameRequiredMessage = '#FirstName-error'
        surenameRequiredMessage = '#Surname-error'
        usernameRequiredMessage = '#Username-error'
        passwordRequiredMessage = '#Password-error'
        confirmPasswordRequiredMessge = '.result'
        confirmPasswordErrorMessage = '#ConfirmPassword-error'
        signupSuccessMessage = '.label-success'
        usernameExistMessage = '.label-danger'
}
  
  export default signupPage;