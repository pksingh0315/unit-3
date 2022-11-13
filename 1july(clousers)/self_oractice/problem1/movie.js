let localStorage_data=JSON.parse(localStorage.getItem("movieData"))
console.log(localStorage_data)

function display (){
    let image=document.createElement('img');
    image.src=localStorage_data.Poster

    let title=document.createElement("h3");
    title.innerText=localStorage_data.Title

    let year=document.createElement("p");
    year.innerText=` Relese Year: ${localStorage_data.Year}`

    document.querySelector("#container").append(image,title,year)
}
display()