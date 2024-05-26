const apikey = "b8d103e568964d4284df60301dff7187";

const blogContainer = document.getElementById("bolg-container");

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
    const response = await fetch(apiUrl)
    const data = await response.json()
   return data.articles;
  } catch (error) {
    console.error("error fetching random news", error);
    return [];
  }
}

function displayBlogs(articles){
    blogContainer.innerHTML = ""
    articles.forEach((article) =>{
const blogCard = document.createElement("div")
blogCard.classList.add("blog-card")
const img = document.createElement("img")
img.src = article.urlToImage
img.alt = article.title
const title = document.createElement ("h2")
title.textContent = article.title
const description = document.createElement
("p")
description.textContent = article.add
description
blogCard.appendChild(img)
blogCard.appendChild(img)
blogCard.appendChild(img)
    })
}

async ()=>{
    try {
       const articles = await fetchRandomNews();
       displayBlogs(articles);
    } catch(error){
console.error ("error fetching random news", error);
    }
};