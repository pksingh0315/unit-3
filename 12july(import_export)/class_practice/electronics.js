// import of navbar

import navbar from "./components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//import of data;

import {getData,append }from "./fetch.js";
const url=`https://fakestoreapi.com/products/category/electronics`;
   let cont=document.getElementById("container");
   getData(url).then((res)=>{
    console.log(res)
    append(res,cont)
   })

// let getData=async ()=>{
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data)
//     append(data)
// }
// getData()

// let append=(data)=>{
//     let cont=document.getElementById("container");

//     data.forEach(({image,title,price})=>{
//         let img=document.createElement('img');
//         img.src=image;
     

//         let t=document.createElement('h3');
//         t.innerText=title;

//         let p=document.createElement('p');
//         p.innerText=price;

//         let div=document.createElement("div");
//         div.append(img,t,p);

//         cont.append (div)
//     })
// }
