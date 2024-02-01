import { getPosts } from "../api/getPosts.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { createPost } from "../common/createpost.js";


//Page heading
const pageNameBlog = document.querySelector(".pagename");
pageNameBlog.innerHTML = `<h1>Blog Posts</h1>
                        <div class="blogquote"><p>“Where heritage meets the plate.”</p> </div>`;


//Rendering and loading pages
                        

let currentPage = 1;
let currentPosts = 8;

let loadMoreBtn = document.querySelector(".loadmorebtn");
loadMoreBtn.addEventListener("click", loadMore)




function renderPosts(post) {
    for (let i = 0; i < posts.length; i++) {
        createPost();
    }

}

async function main(){
    const posts = await getPosts()
    createPost();
}
main();
loadMore();
renderPosts();


// loadMoreBtn.addEventListener("click", (e) => {
//     const newUrl = BUTACUISINE_URL_MEDIA + restPage;
//     postBox.innerHTML = "";
//     loadPage()
//     getPosts(newUrl);
//     console.log(newUrl);
//     loadMoreBtn.style.display = "none";
// });



//<div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>

import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, perPage5, restPage } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import { loadPage } from "../common/pageloader.js";
import * as pageloader from "../common.js";

const pageNameBlog = document.querySelector(".pagename");
const filter = document.querySelector(".filter");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postContainer = document.querySelector(".postbox");

//page=${page}&per_page=${perPage}&_embed)

async function getPosts(page = 1, perPage = 5) {
   try {
    const response = await fetch(BUTACUISINE_URL_MEDIA);
    const posts = await response.json(); 
    
    console.log(response,posts);

    loadPage();
    createPost(posts);
    filter.innerHTML += "";
    pageNameBlog.innerHTML += "";
    return posts;
   
} catch(error) {
    console.log("Unknown error", error);
   // postBox.innerHTML = errorMessage();
}

}
getPosts();



let currentPage = 1;
let currentPosts = 7;

loadMoreBtn.addEventListener("click", loadMore);

async function loadMore() {
    try {
        let loadPosts = await getPosts(`page=${currentPage}&per_page=${currentPosts}&_embed)`);
        createPost(posts, postContainer);

        if (posts.length < currentPosts) {
            loadMoreBtn.style.display = "none";
        }
        currentPage++;

        console.log(currentPage);
    
    
    } catch(error) {
    console.log("Something went wrong", error);
    }
}


async function createPost(posts) {
    pageNameBlog.innerHTML = `<h1>Blog Posts</h1>
                            <div class="blogquote"><p>“Where heritage meets the plate.”</p> </div>`;
    loadPage();
    const imgUrl = posts._embedded["wp:featuredmedia"][0].source_url;
    const imgAlt = posts._embedded["wp:featuredmedia"][0].alt_text;

        posts.forEach(function (posts) {
            postContainer.innerHTML += `<div>
                                    <div class="postcontent">
                                        <a href="blogpage.html?id=${posts.id}">
                                            <img class="postsimage" src="${}" alt="${imgAlt}">
                                            <h2 class="poststitle">${posts.title.rendered}</h2>
                                            <p class="shorttext">${posts.excerpt.rendered}</p>
                                            <button class="r-m-btn">The recipe <span class="heart">&#9825;</span></button>
                                        </a>
                                    </div>
                                    <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                </div>`;                                                      
    });

    return postContainer;
}

loadMoreBtn.addEventListener("click", (e) => {
    const newUrl = BUTACUISINE_URL_MEDIA + restPage;
    postBox.innerHTML = "";
    loadPage()
    getPosts(newUrl);
    console.log(newUrl);
    loadMoreBtn.style.display = "none";
});