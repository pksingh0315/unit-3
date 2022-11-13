let api_key="AIzaSyDmD-sHs7L4uvfe6zJgN6mGV7hAHCJrWNY";
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=AIzaSyDmD-sHs7L4uvfe6zJgN6mGV7hAHCJrWNY

let search=async()=>{
    let query=document.getElementById('query').value;
    let data=await getData(query);
    append(data)
  
}

let getData=async (query) =>{
    // let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDmD-sHs7L4uvfe6zJgN6mGV7hAHCJrWNY`

    let url=`https://masai-mock-api.herokuapp.com/hotels/search?city={query}`


    let res=await fetch(url);
      let data=await res.json()  
      return data.items               
    console.log(data)
}

      let append=(dataaa)=>  {
    let container=document.getElementById("container");
    container.innerHTML=null

     dataaa.forEach((el)=>{
        //snippet-->>title;
        // snippet-->thumbnails-->medium-->url;

        let image=document.createElement('img');
        image.src=el.snippet.thumbnails.medium.url;

        let h3=document.createElement('h3');
        h3.innerText=el.snippet.title;

        let div=document.createElement("div");
        div.onclick=() =>{
            saveVideo(el)
        }
        div.setAttribute("class","video");
        div.append(image,h3);

        container.append(div)
   })
}


