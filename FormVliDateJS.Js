let form = document.getElementById("RegForm")
let pw = document.getElementById("pass")


form.addEventListener("submit" , (event) => {
    event.preventDefault()
    let fname = event.target.FirstName.value;
    let lname = event.target.LastName.value;
    let email = event.target.Email.value;
    let gender = event.target.gender.value;
    let pw = event.target.Password.value;
    let cpw = event.target.ConfirmPassword.value;
    if(fname == ''){
        alert("Enter First Name")
        return false
    }
    if(lname == ''){
        alert("Enter Last Name")
        return false
    }
    if(email == ''){
        alert("Enter email")
        return false
    }
    
    if(pw.length < 6){
        alert("PassWord  should contain atleast 6 charachter")
        return false
    }
    
    if(cpw !== pw ){
        alert("password should match")
        return false
    }

    let user = {
        name : fname + lname,
        email : email,
        gender : gender,
        password : pw
    }
    console.log(user)
    form.reset()
    location.href="./ToDoHtml.html"
    //location.replace("./ToDoList/ToDoHtml.html") it replace url so we cant have no option to come back to login page 
})