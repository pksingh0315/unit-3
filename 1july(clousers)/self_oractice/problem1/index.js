document.querySelector("#search").addEventListener("input",debounce);
function movieInput(){
    let name=document.querySelector("#search").value;
    let url=`https://www.omdbapi.com/?apikey=f1653a75&s=${name}`

   

    //appendMovie(div2)


    async function movieAPI(){
    let data=await fetch(url)
    data=await data.json()
    appendMovie(data.Search)
    //console.log(data.Search)
    }
    movieAPI()
}

function appendMovie(data){
    let div2=document.createElement('div')
    div2.setAttribute("id","container");
    div2.innerHTML=""
    if(!data){
        return
    }
    data.forEach(ele => {

        let div1=document.createElement('div')
        div1.setAttribute("id","box");

        // let div2=document.createElement('div')
        // div2.setAttribute("id","container");

        div1.addEventListener("click",function(){
            localStorage.setItem("movieData",JSON.stringify(ele))
            window.location.href="movie.html"
            
           
        })

        let image=document.createElement("img");
        image.src=ele.Poster;

        let title=document.createElement("p");
        title.innerText=ele.Title
        
        div1.append(image,title)
        div2.append(div1)
        document.querySelector("body").append(div2)
    //    console.log(ele) 
    });

}

//***************debouncing**************** */
let id;
function debounce(){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(movieInput,1000)
}

//*************************************** */



