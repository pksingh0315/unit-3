const url="https://grocery-masai.herokuapp.com/items"
fetch(url)
.then(function(res){
    return res.json()
   })
   .then(function(res){
    console.log(res)
    pks(res.data)
   })
   .catch(function(rej){
    console.log(rej)
   })

   function pks(dat){
    let container=document.querySelector("#groceries");
    dat.forEach(function(el){
        let image=document.createElement("img");
        image.src=el.image;
      

        let name=document.createElement('p');
        name.innerText=el.name;
       

        let price=document.createElement('p')
        price.innerText=el.price;
     

        let btn=document.createElement('button');
        btn.setAttribute("class","add_to_cart");
        btn.innerText="Add to Cart"

          let div=document.createElement("div");
          div.setAttribute("class", "item");
        div.append(image,name,price,btn);

        container.append(div);
    })
   }