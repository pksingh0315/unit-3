let movieArr = JSON.parse(localStorage.getItem("movieData")) || [];
document.querySelector("form").addEventListener("submit", movieForm);
function movieForm(event) {
  event.preventDefault();
  //****catch all data */
  let form = document.querySelector("form");

  let name = form.name.value;
  let date = form.date.value;
  let image = form.photo.value;
  let rating = form.rating.value;

  let movieObj = new movieList(name, date, image, rating);
  console.log(movieObj);

  movieArr.push(movieObj);
  localStorage.setItem("movieData", JSON.stringify(movieArr));

  window.location.reload()
}

function movieList(n, d, i, r) {
  this.movie = n;
  this.releseDate = d;
  this.movieLink = i;
  this.imdbRating = r;
}
//*******************append************* */
function displayMovie(){
    movies.innerHTML=""
    movieArr.forEach(ele => {
     let div=document.createElement("div")
     div.setAttribute("id","box")

     let image=document.createElement("img")
     image.src= ele.movieLink

     let name=document.createElement("h3")
     name.innerText=ele.movie

     let date=document.createElement("p")
     date.innerText=ele.releseDate

     let rating=document.createElement("p")
     rating.innerText=ele.imdbRating+"*"
     div.append(image,name,date,rating) 
     document.querySelector("#movies").append(div)
        
    });
}
displayMovie()

//***********slide show*********** */

let div=document.querySelector('#slideshow')
let image=document.createElement("img")
let id;
let i=0

document.querySelector("#start").addEventListener("click",slide)

function slide(){

 
    id=setInterval(()=>{
        if(i===movieArr.length){
            i=0
        }
        image.src=movieArr[i].movieLink
        div.append(image)
        i++
    },1000)
}

//**** for stop************
document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(id)
})

//***************for sorting********* */

document.querySelector("#select").addEventListener("click",sortRating)

function sortRating(){
    let x=document.querySelector("#select").value
    if(x=='lh'){
        movieArr.sort((a,b)=>a.imdbRating-b.imdbRating)
        displayMovie(movieArr)
     
    }
    if(x=='hl'){
        movieArr.sort((a,b)=>b.imdbRating-a.imdbRating)
        displayMovie(movieArr)
     
    }
  
}


//****************************************************** */
// 0: {movie: "RRR", releseDate: "2022-03-24",…}
// imdbRating: "8"
// movie: "RRR"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
// releseDate: "2022-03-24"
// 1: {movie: "KGF", releseDate: "2018-12-21",…}
// imdbRating: "9"
// movie: "KGF"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/c/cc/K.G.F_Chapter_1_poster.jpg"
// releseDate: "2018-12-21"
// 2: {movie: "Iron man", releseDate: "2008-04-14",…}
// imdbRating: "8"
// movie: "Iron man"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg"
// releseDate: "2008-04-14"
// 3: {movie: "Dr Strange", releseDate: "2022-05-06",…}
// imdbRating: "7"
// movie: "Dr Strange"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"
// releseDate: "2022-05-06"
// 4: {movie: "3 idiots", releseDate: "2009-12-25",…}
// imdbRating: "9"
// movie: "3 idiots"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
// releseDate: "2009-12-25"
// 5: {movie: "Gravity", releseDate: "2013-10-11",…}
// imdbRating: "6"
// movie: "Gravity"
// movieLink: "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg"
// releseDate: "2013-10-11"