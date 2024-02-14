import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, baseUrl, urlLoad } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import { showLoader, hideLoader } from "../common/loader.js";

const pageNameBlog = document.querySelector(".pagename");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postContainer = document.querySelector(".postbox");
const postContainer3 = document.querySelector(".postbox2");


let currentCategory = 1;
let currentPage = 1;
let currentPosts = 9;


async function getPosts() {
   try {
    showLoader();
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
    hideLoader();
   // postBox.innerHTML = errorMessage();
}finally {
    hideLoader();
}
}


getPosts();

function createPost(posts) {
    setTimeout (function() {
    postContainer.innerHTML = "";
    pageNameBlog.innerHTML = `<h1>Blog Posts</h1>
                            <div class="blogquote"><p>“Where heritage meets the plate.”</p> </div>`;
        posts.forEach(function (post) {
            postContainer.innerHTML += `<div>
                                            <div class="postcontent">
                                                <a href="blogpage.html?id=${post.id}">
                                                    <img class="postsimage" src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
                                                    <div class="post-aut-date">
                                                        <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"></i> ${post._embedded.author[0].name} 
                                                        <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"></i> ${post.date.slice(0, -9)} 
                                                    </div>
                                                    <h2 class="poststitle">${post.title.rendered}</h2>
                                                    <p class="shorttext">${post.excerpt.rendered}</p>
                                                    <button class="r-m-btn">The recipe <span class="heart">&#9829;</span></button>
                                                </a>
                                            </div>
                                            <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                        </div>`;                                                      
            });
    }, 2000);
}

loadMoreBtn.addEventListener("click", function () {
    currentPosts += 9;
    getPosts(baseUrl);
    loadMoreBtn.style.display = "none";
});



/* FILTER / BUTTON / CATEGORY */

document.addEventListener("DOMContentLoaded", function(){
const postContent = document.querySelectorAll(".postcontent")
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (filterBtn) {
    filterBtn.addEventListener ("click", function (event) {

        const selectedCategory = event.target.value;
        console.log('Selected URL:', selectedCategory);
        handleFilter(selectedCategory);

        if (selectedCategory !== "1") {
            loadMoreBtn.style.display = "none";
        }

    });
});

async function handleFilter(selectedCategory) {
    try{
        let catUrl = urlLoad + `&categories=${selectedCategory}&_embed`;
        const response = await fetch(catUrl);
        const posts =  await response.json();
        console.log(catUrl);

        if (!posts) {
            console.error("Posts not found");
            return;
        }
        createPost(posts);

    }catch(error) {
        console.error("Something went wrong", error);
    }
}
});
