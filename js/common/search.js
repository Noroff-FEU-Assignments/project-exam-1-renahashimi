import { urlLoad, BUTACUISINE_URL_MEDIA } from "../api/url.js";


const searchBtn = document.querySelector(".searchbox button")
const searchResult = document.querySelector(".searchresult")


async function searchPosts(urlLoad) {
    try{
        const response = await fetch (urlLoad);
        const posts = await response.json();

    if (posts.length > 0)  {
        searchResult.innerHTML += searchResultPost(posts);
    } 
    else {
        searchResult.innerHTML += `<p class="searcherr">No matching recipes found, try again</p>`;
    }

    } catch(error) {
        console.log("No recipes found", error);
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
    event.preventDefault();
    document.querySelector(".searchbox").classList.add("active");
    const searchInput = document.getElementById("search").value;
    const newUrl = urlLoad + `&search=${searchInput}`;    

    if (searchInput) {
        searchPosts(newUrl);  
    } 
    else{
        searchResult.innerHTML = `<p class="searcherr">No matching recipes found, try again</p>`;
    }
}


window.addEventListener("click", clearSearch);

function clearSearch(){
    searchResult.innerHTML = "";
}

const cleatBtn = document.querySelector(".clearbtn");
cleatBtn.addEventListener("click", clearSearchTxt);

function clearSearchTxt() {
    const searchTxt = document.getElementById("search").value;
    searchTxt.innerHTML.value = "";

    console.log(searchTxt)
}
