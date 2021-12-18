class FormValidation{
    formValues = {
        username : " ",
        email : " ",
        phonenumber : " ",
        password : " ",
        confirmpassword : " "
    }
    errorValues  = {
        usernameErr : " ",
        emailErr : " ",
        phonenumberErr : " ",
        passwordErr : " ",
        confirmpasswordErr : " "
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
    }
    validateUsername(){
        if(this.formValues.username === " "){
            this.errorValues.usernameErr = "* Please Enter Your Name!"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(this.formValues.username.length <= 4){
                this.errorValues.usernameErr ="*Userrname must be atleast 5 characters!"
                this.showErrorMsg (0,this.errorValues.usernameErr)
            }else if(this.formValues.username.length>14){
                this.errorValues.usernameErr ="*Username shuld not exceeds 14 chare "
                this.showErrorMsg(0,this.errorValues.usernameErr)   
            }else {
                this.errorValues.usernameErr =" " 
                this.showSuccessMsg(0)
            }
    }
    validateEmail(){
        const regExp =/^([a-zA-Z0-9-_\.]+)@([a-zA_Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues.email ===""){
            this.errorValues.emailErr  ="*Please Enter the Valied Email!"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }else if(!(regExp.test(this.formValues.email))) {
            this.errorValues.emailErr ="*Invalied Email !"
            this.showErrorMsg(1, this.errorValues.emailErr)
        }else{
            this.errorValues.emailErr =""
            this.showSuccessMsg(1)
        }
    }
    validatePhonenumber(){
        const phoneno = /^\d{10}$/
        if(this.formValues.phonenumber === ""){
            this.errorValues.phonenumberErr = "*Please Enteerr Your Valied Phone Number!"
            this.showErrorMsg(2,this.errorValues.phonenumberErr)
        }else if(phoneno.test(this.formValues.phonenumber)){
            this.errorValues.phonenumberErr=""
            this,this.showSuccessMsg(2)
        }else{
            this.errorValues.phonenumberErr="*Invalied Phone Number!"
            this.showErrorMsg(2,this.errorValues.phonenumberErr)
        }
    }
    validatePassword(){
        if(this.formValues.password===""){
             this.errorValues.passwordErr = "*Please Provide your Password!"
             this.showErrorMsg(3,this.errorValues.passwordErr)
            
        }else if(this.formValues.password.length<4){
            this.errorValues.passwordErr = "*Password Charecter  must be atleaset 5 Values!"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        }else if(this.formValues.password.length >10){
            this.errorValues.passwordErr = "*Password should not exceeds 10 character!"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        }else{
            this.errorValues.passwordErr=""
            this.showSuccessMsg(3)
        }
    }
    validateConfirmpassword(){
        if(this.formValues.confirmpassword===""){
            this.errorValues.confirmpasswordErr = "*nvalid conformpassword!"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        }else if(this.formValues.confirmpassword ===this.formValues.password && this.errorValues.passwordErr===""){
            this.errorValues.confirmpasswordErr =""
            this.showSuccessMsg(4)
        }else if (this.errorValues.passwordErr) {
            this.errorValues.confirmpasswordErr = "*An Error Occurred in Password Field!"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        }else {
            this.errorValues.confirmpasswordErr ="*Password Must Much each!"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        }
    }
    alertMessage(){
        const {usernameErr, emailErr, phonenumberErr, passwordErr, confirmpasswordErr}= this.errorValues
        if(usernameErr ===" " && emailErr ===" " && phonenumberErr ===" "&& passwordErr === " "&& confirmpasswordErr ===" "){
            swal ("Registation Succesful!","Thank you!", +this.formValues.username, "success").then(()=>{
                console.log(this.formValues);
                this.removeInputs()
            })
        }else {
            swal ("Give Valid Input","Click ok to Continue!","error")
        }
    }
    removeInputs(){
        const form_group = document.getElementsByClassName('form-group')
        Array.form(form_group).forEach(element =>{
            element.getElementsByClassName('input')[0].value =""
            element.getElementsByTagName('span')[0].textContent =""
            element.classList.remove('success')
        })
    }
}
const ValidateUserInputs = new FormValidation()
document.getElementsByClassName('form')[0].addEventListener('submit', event=>{
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateConfirmpassword()
    ValidateUserInputs.alertMessage()
})
