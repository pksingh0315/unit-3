// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

const url=`https://masai-api.herokuapp.com/news/top-headlines?country={country code}`;
async function getData(){
    
        let res=await fetch(url);
        let data=await res.json();
     
        console.log(data);

    }

getData()


