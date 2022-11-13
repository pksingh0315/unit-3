

let userArr=JSON.parse(localStorage.getItem("userData"))||[]
document.querySelector("form").addEventListener("submit",myForm)
function myForm(event){
    event.preventDefault()
    //****catch all data */
    let form=document.querySelector("form")

    let name=form.name.value
    let mobile=form.mbl.value
    let email =form.mail.value
    let password =form.password.value
 
    let userObj=new submitData(name,mobile,email,password)

    if(checkEmail(email)==true){
        userArr.push(userObj)
        localStorage.setItem("userData",JSON.stringify(userArr))
        alert("Signup Successful")
        window.location.href="login.html"
    }else{
        alert("Email already exists")
    }



}

function submitData(n,m,e,p){
    this.userName=n;
    this.userMobile=m;
    this.userEmail=e;
    this.userPassword=p

}
//********Check Email exists or Not******** */
function checkEmail(xyz){
let res=userArr.filter(function(ele){
    return ele.userEmail==xyz
})
if(res.length>0){
    return false
}else{
    return true
}
}
