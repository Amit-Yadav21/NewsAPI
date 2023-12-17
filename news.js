let key = "22b47fb6622942e787fe9957bb29aab9";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");


const getData = async (input) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    // console.log(jsonData.articles);
    
    inputData.value= "                                                                                                          "
    cardData.innerHTML = "";
    
    // .........................................when get only 9 cards 
    // article = jsonData.articles.slice(0, 9) 
    // article.forEach(function (article) {

    // .........................................when get all cards 
    jsonData.articles.forEach(function (article) { 
        // console.log(article.description);
        des = article.description.length > 100 ? article.description.slice(0, 100) : article.description

        let divs = document.createElement("div")
        divs.classList.add("card");
        cardData.appendChild(divs);

    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="Image">
    <h4>${article.title}</h4>
    <p>${des}</p>
    <h3> Read full artical <a target = "_blank" href = "${article.url}">&#8594;</a></h3>
    `
    })

}

window.addEventListener("load",function(){
    getData("India")
})
SearchBtn.addEventListener("click",function(){
    let inputText = inputData.value;
    getData(inputText);
})