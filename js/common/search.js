import { getPosts } from "../api/getPosts.js";
import { urlLoad, BUTACUISINE_URL_MEDIA } from "../api/url.js";

const searchBtn = document.querySelector(".searchbox button")
const searchResult = document.querySelector(".searchresult")


async function searchPosts() {
    try{
        const response = await fetch (urlLoad);
        const post = await response.json();

    // if (post.length > 0)  {
    //     searchResult.innerHTML += searchResultPost(post);
    // } else {
    //     searchResult.innerHTML += `<div>This recipe do not exist, try again</div>`;
    // }
    searchResult.innerHTML += searchResultPost(post);
     
    console.log(post, searchBtn);

    } catch(error) {
        console.log("Unknown error", error);
       // postBox.innerHTML = errorMessage();
    }
};


searchBtn.onclick = function () {
    const searchInput = document.querySelector("#search").value;
    console.log(searchInput);
    const newUrl = urlLoad + `&search=${searchInput}`;
  
    if (!searchInput) {
        searchResult.innerHTML += `<div>This recipe do not exist, try again</div>`;
    } else {
        searchPosts(newUrl);
    }
    console.log(newUrl);
};

function searchResultPost(post){
    post.forEach(function (posts) {
        searchResult.innerHTML += `<div class="searchcontent">
                                    <a href="blogpage.html?id=${posts.id}">
                                       <img src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts._embedded["wp:featuredmedia"][0].alt_text}">
                                       <h3>${posts.title.rendered}</h3>
                                    </a>
                                </div>`;

    })
    return searchResult;
}
