import nav from "./components/navbar.js";
document.querySelector("#navbar").innerHTML=nav()

//**************importing Data from fetch.js******* */

import {getData,appendData} from "./components/fetch.js";

let url=`https://fakestoreapi.com/products/category/electronics `
let cont=document.getElementById("Dabba")

let fetchData=async ()=>{
    let data=await getData(url)
    //console.log(data)
    appendData(data,cont)
}
fetchData()
 


