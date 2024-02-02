import { getPosts } from "../api/getPosts.js";
import { urlLoad, BUTACUISINE_URL_MEDIA } from "../api/url.js";

const searchBtn = document.querySelector(".searchbox button")
const searchResult = document.querySelector(".searchresult")


async function searchPosts(urlLoad) {
    try{
        const response = await fetch (urlLoad);
        const posts = await response.json();

    if (posts.length > 0)  {
        searchResult.innerHTML += searchResultPost(posts);
    } else {
        searchResult.innerHTML += `<div>No results found for "${searchInput}", try again</div>`;
    }
     
    console.log(posts, searchBtn);

    } catch(error) {
        console.log("Unknown error", error);
       // postBox.innerHTML = errorMessage();
    }
};
function searchResultPost(posts){
    let htmlstring = "";
    posts.forEach(function (posts) {
        htmlstring += `<div class="searchcontent">
                                    <a href="blogpage.html?id=${posts.id}">
                                       <img src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts._embedded["wp:featuredmedia"][0].alt_text}">
                                       <h3>${posts.title.rendered}</h3>
                                    </a>
                                </div>`;

    })
    return htmlstring;
}

searchBtn.onclick = function () {
    const searchInput = document.getElementById("search").value;
    console.log(searchInput);
    const newUrl = urlLoad + `&search=${searchInput}`;
  
    if (searchInput) {
        searchPosts(newUrl);
    } else {
        searchResult.innerHTML += `<div>No results found for "${searchInput.value}", try again</div>`;
    }
    clearSearch()
    console.log(newUrl);
}

function clearSearch(){
    searchResult.innerHTML = "";
}
