//import of navbar

import navba from "./components/navbar.js";
document.getElementById("navbar").innerHTML=navba();

//import of data

import {getData,append }from "./fetch.js";
const url=`https://fakestoreapi.com/products/category/jewelery `;
   let cont=document.getElementById("container1");
   getData(url).then((res)=>{
    console.log(res)
    append(res,cont)
   })