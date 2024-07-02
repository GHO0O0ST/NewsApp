const apiKey = "e3f6ffda607943dc86b1fbbad5fda80b";
const apiUrl = "https://newsapi.org/v2/everything?q=";

const searchBox = document.getElementById("input-box");
const btn = document.getElementById("btn");
        
window.addEventListener("load", ()=> fetchNews("Yogi Adityanath"));

async function fetchNews(qureys){
    const response = await fetch(apiUrl + qureys + `&apiKey=${apiKey}`);
    const data = await response.json();

    console.log(data);

    if(data.totalResults === 0){
        alert(`Sorry I don't have any data related to ${searchBox.value}`);
        searchBox.value = "";
        fetchNews("Yogi Adityanath");
    }
    bindData(data.articles);
}

function bindData(articles){
    const cardContainer = document.querySelector(".card-container");
    const cardTemplate  = document.querySelector("#card-template");

    cardContainer.innerHTML = "";

    articles.forEach((article) =>{
        if(!article.urlToImage) return;
        cardClone = cardTemplate.content.cloneNode(true);
        fillDatacard(cardClone,article);
        cardContainer.appendChild(cardClone);
    });
}

function fillDatacard(cardClone,article){
    const newsImg = cardClone.querySelector("#img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#description");

    newsImg.src = article.urlToImage; 
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} . ${date}`;

    const link = cardClone.querySelector("#link");
    cardClone.querySelector(".card").addEventListener("click",function(){
    link.href = article.url;  
    });
}

function navItem(id){
    fetchNews(id);
}

btn.addEventListener("click", function(){
    fetchNews(searchBox.value);
});

// const pro = new Promise((res, rej)=>{
//     return res('hello world');
// });

// let p1 = pro.then((data)=>{
//     console.log(data);
//     return rej()
// })

// const random = new Promise((res, rej)=>{
//     let n = Math.floor(Math.random()*10);

//     if(n < 5){
//         return res();
//     }else{
//         return rej();
//     }
// });

// random.then(()=>{
//     console.log("its okay");
// })
// .catch(()=>{
//     console.log(("its not okay"));
// })

// const pro = new Promise((res, rej)=>{
//     return res("sabse phale ghar par aao");
// });

// const p1 = pro.then((data)=>{
//         console.log(data);
//     return new Promise((res, rej)=>{

//     return res("gate kholo or gate lagao");
//     });
// });

// const p2 = p1.then((data)=>{
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res("khana pako or kahao");
//     });
// });

// const p3 = p2.then((data)=>{
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res("coding ki practice karo");
//     });
// });

// const p4 = p3.then((data)=>{
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res("sojao kyuki tum thak gaye ho");
//     });
// });

// p4.then((data)=>{
//     console.log(data);
// })

// window.addEventListener("load", ()=> fetchNews("Yogi Adityanath"));

// async function fetchNews(qureys){
//     const response = await fetch(apiUrl + qureys + `&apikey=${apiKey}`);
//     const data = await response.json();
//     console.log(data);

//     if(data.totalResults === 0){
//         alert(`Sorry I don't have Any Data Related to ${searchBox.value}`);
//         searchBox.value = "";
//         fetchNews("Yogi Adityanath");
//     }

//     bindata(data.articles);

// }

// function bindata(articles){
//     const cardContainer = document.querySelector(".card-container");
//     const cardTemplate = document.querySelector("#card-template");
    
//     cardContainer.innerHTML = "";

//     articles.forEach((article) => {
//         if(!article.urlToImage) return;
//         const cardClone = cardTemplate.content.cloneNode(true);
//         fillData(cardClone, article)
//         cardContainer.append(cardClone);
//     });

// }

// function fillData(cardClone, article){
//     const newsImg = cardClone.querySelector('#img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#description');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", {
//     timeZone: "Asia/Jakarta",});

//     newsSource.innerHTML = `${article.source.name} . ${date}`;

//     const link = cardClone.querySelector("#link");
//     cardClone.querySelector(".card").addEventListener("click", ()=>{
//         link.href = article.url; 
//     });

// }

// function navItem(id){
//     fetchNews(id);
// }

// btn.addEventListener("click", ()=>{
//     fetchNews(searchBox.value);
// });