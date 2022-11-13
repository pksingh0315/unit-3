let getData=async(url)=>{
    let res=await fetch(url)
    let data=await res.json()
    data=data.sort((a,b)=>{
        if(a.title>b.title) return 1
        if(a.title<b.title) return -1
        return 0
    })
    return data;
}


//****************************append************** */

  let appendData=(x,y)=>{
  
   x.forEach (({image,price,title})=>{

    let photo=document.createElement("img")
    photo.src=image

    let t=document.createElement("h3")
    t.innerText=title

    let p=document.createElement("p")
    p.innerText=price

    y.append(photo,t,p)
 

   })
  }

  export{getData,appendData}