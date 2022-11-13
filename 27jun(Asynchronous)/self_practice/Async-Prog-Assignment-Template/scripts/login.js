
//******get data from LS */
let loginArr=JSON.parse(localStorage.getItem("userData"))||[]

document.querySelector("form").addEventListener("submit",loginForm)
function loginForm(event){
    event.preventDefault()
    //****catch all data */
    let form=document.querySelector("#login-form-div>form")

    
    let email =form.mail.value
    let password =form.num.value
    console.log(email,password)
 
    let loginObj=new loginData(email,password)

    if(checkEmailPass(email,password)==true){
       
        localStorage.setItem("login",JSON.stringify(loginObj))
        alert("login Successful")
        window.location.href="index.html"
    }else{
        alert("invalid Credentials")
    }



}

//**************** */
function loginData(e,p){

    this.userEmail=e;
    this.userPassword=p

}

function checkEmailPass(email,password){
    for(let i=0;i<loginArr.length;i++){
        if((loginArr[i].userEmail==email )&&(loginArr[i].userPassword==password )){
            return true
        }else{
            return false
        }
    }
}