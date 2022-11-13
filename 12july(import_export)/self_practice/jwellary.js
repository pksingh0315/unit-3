import { append } from "../class_practice/fetch.js";
import nav from "./components/navbar.js";
document.querySelector("#navbar").innerHTML=nav()


//********************Fetch data********************************** */

import {getData,appendData} from "./components/fetch.js";

let url=`https://fakestoreapi.com/products/category/jewelery `
let cont=document.getElementById("container")

let fetchData=async ()=>{
    let data=await getData(url)
    //console.log(data)
    appendData(data,cont)
}
fetchData()



