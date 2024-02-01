import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, perPage5, restPage } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import { loadPage } from "../common/pageloader.js";
import * as pageloader from "../common.js";

const pageNameBlog = document.querySelector(".pagename");
const filterBtn = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postContainer = document.querySelector(".postbox");
const postContainer3 = document.querySelector(".postbox2");

console.log(filterBtn);
const baseUrl = BUTACUISINE_URL_MEDIA;

console.log(baseUrl);


const page = 1;
const currentPosts = 7;
async function getPosts() {
   try {
    const response = await fetch(BUTACUISINE_URL_MEDIA);
    const posts = await response.json(); 
    
    console.log(posts);
    loadPage();
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
    pageNameBlog.innerHTML = `<h1>Blog Posts</h1>
                            <div class="blogquote"><p>“Where heritage meets the plate.”</p> </div>`;
    loadPage();
        posts.forEach(function (posts) {
            postContainer.innerHTML += `<div>
                                            <div class="postcontent">
                                                <a href="blogpage.html?id=${posts.id}">
                                                    <img class="postsimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}">
                                                    <div class="post-aut-date">
                                                        <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"></i> ${posts._embedded.author[0].name} 
                                                        <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"></i> ${posts.date.slice(0, -9)} 
                                                    </div>
                                                    <h2 class="poststitle">${posts.title.rendered}</h2>
                                                    <p class="shorttext">${posts.excerpt.rendered}</p>
                                                    <button class="r-m-btn">The recipe <span class="heart">&#9825;</span></button>
                                                </a>
                                            </div>
                                            <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                        </div>`;                                                      
            });
}



// function renderSpinner(){
//     const recipe = `<div class="spinn"></div>`;
//     return recipe;
// }

// filterBtn.forEach(function (catBtn) {
//     catBtn.onclick = function (e) {
//         filterPost(catBtn);
//         const catFilter = e.target.value;
//         console.log(catBtn);

        
//         if (catFilter === 1) {
//             getPosts(baseUrl, postContainer);
//         } else {
//             const catUrl = baseUrl + `&categories=${catFilter}`;
//             getPosts(catUrl);
//             console.log(catUrl, catFilter);
        
//         }
//     }
// });

// function filterPost(filterOn) {
//     filterBtn.forEach((catBtn) => catBtn.classList.remove("post-selected"));
//     filterOn.classList.add("post-selected");
        
// }


// //<div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>