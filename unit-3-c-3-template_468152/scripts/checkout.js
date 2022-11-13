// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let sum=localStorage.getItem("amount")
//console.log(sum)

let h1=document.querySelector("#navbar>h1:nth-child(2)")
h1.innerText=sum

//************************************** */
let lsmovie=JSON.parse(localStorage.getItem("movie"))
let image=document.createElement('img')
image.src=lsmovie.Poster;

let title =document.createElement("h3")
title.innerText=lsmovie.Title
document.querySelector("#movie").append(image,title)

//******************************************** */

document.querySelector("#confirm").addEventListener('click',myFunc)
function myFunc(){
    let seat=document.querySelector("#number_of_seats").value
    let total_amount=(+seat*100)
    if(total_amount>sum){
        alert("Insufficient Balance !")

    }else{
        alert("Booking Successful!")
        sum=sum-total_amount
         sum=localStorage.setItem("amount",sum)
        window.location.reload()
    }
    
    
    

    console.log(sum)
}

