import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, baseUrl, urlLoad } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
// import { loadPage } from "../common/pageloader.js";
// import * as pageloader from "../common.js";



const pageNameBlog = document.querySelector(".pagename");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postContainer = document.querySelector(".postbox");
const postContainer3 = document.querySelector(".postbox2");


let currentCategory = 1;
let currentPage = 1;
let currentPosts = 9;


async function getPosts() {
   try {
    const response = await fetch(baseUrl + `?per_page=${currentPosts}&_embed`);
    const posts = await response.json(); 

    if (!posts) {
        console.error("Posts not found");
        return;
    }
    
    console.log(posts);

    createPost(posts);
    postContainer.innerHTML += "";
    pageNameBlog.innerHTML += "";
    return posts;
   
} catch(error) {
    console.log("Unknown error", error);
   // postBox.innerHTML = errorMessage();
}
}
getPosts();



function createPost(posts) {
    postContainer.innerHTML = "";
    pageNameBlog.innerHTML = `<h1>Blog Posts</h1>
                            <div class="blogquote"><p>“Where heritage meets the plate.”</p> </div>`;
        posts.forEach(function (posts) {
            postContainer.innerHTML += `
                                            <div class="postcontent">
                                                <a href="blogpage.html?id=${posts.id}">
                                                    <img class="postsimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts._embedded["wp:featuredmedia"][0].alt_text}">
                                                    <div class="post-aut-date">
                                                        <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"></i> ${posts._embedded.author[0].name} 
                                                        <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"></i> ${posts.date.slice(0, -9)} 
                                                    </div>
                                                    <h2 class="poststitle">${posts.title.rendered}</h2>
                                                    <p class="shorttext">${posts.excerpt.rendered}</p>
                                                    <button class="r-m-btn">The recipe <span class="heart">&#9829;</span></button>
                                                </a>
                                            </div>
                                            <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                      `;                                                      
            });
}

loadMoreBtn.addEventListener("click", function () {
    currentPosts += 9;
    getPosts(baseUrl);
    loadMoreBtn.style.display = "none";
});


document.addEventListener("DOMContentLoaded", function(){
const postContent = document.querySelectorAll(".postcontent")
const filterBtn = document.querySelectorAll(".filter-btn");

filterBtn.forEach(function (catBtn) {
    catBtn.onclick = function (e) {
        filterPost(catBtn, filterBtn);
        const catFilter = e.target.value;
        console.log('Selected URL:', catFilter);
        const catUrl = urlLoad + `&categories=${currentCategory}`;
        currentCategory = 1;
        postContainer.innerHTML = "";

        if (catFilter === 1) {
        
            getPosts(catUrl, postContent)
            console.log(currentCategory);
        } 
        else {
            currentCategory = catFilter;
            const catUrl = urlLoad + `&categories=${currentCategory}`;
            getPosts(catUrl, postContent);
            console.log('Category URL:', catUrl, catFilter);
        }
    }
});

function filterPost(filterOn) {
    filterBtn.forEach((catBtn) => catBtn.classList.remove("post-selected"));
    filterOn.classList.add("post-selected");      
}
});