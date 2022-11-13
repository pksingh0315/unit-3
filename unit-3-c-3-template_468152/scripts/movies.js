// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//********************************************************* */

let sum = localStorage.getItem("amount");

let h1 = document.querySelector("#navbar>h1:nth-child(2)");
h1.innerText = sum;
//**************************************************** */

document.querySelector("#search").addEventListener("input", debounce);
function myMovie() {
  let movie = document.querySelector("#search").value;
  //***********invoke function 'MovieList'*********
  MovieList(movie);
}
//*******************Fetch APIs*************//

async function MovieList(name) {
  let data = await fetch(`https://www.omdbapi.com/?apikey=f1653a75&s=${name}`);
  data = await data.json();
  //console.log(data)

  append(data.Search);
}

//************append movie list************//

function append(x) {
  if(!x){
    return
  }
  movies.innerHTML = "";
  x.forEach((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "movie_tab");

    let image = document.createElement("img");
    image.src = ele.Poster;

    let title = document.createElement("h3");
    title.innerText = ele.Title;

    let button = document.createElement("button");
    button.setAttribute("class", "book_now");
    button.innerText = "Book now ";
    button.addEventListener("click", function () {
      localStorage.setItem("movie", JSON.stringify(ele));

      window.location.href = "checkout.html";
    });

    let movies = document.querySelector("#movies");
    div.append(image, title, button);
    movies.append(div);
  });
}

//********************Debouncing********************* */
let id;
function debounce(){
  if(id){
    clearTimeout(id)
  }
  id=setTimeout(myMovie,1000)
}
