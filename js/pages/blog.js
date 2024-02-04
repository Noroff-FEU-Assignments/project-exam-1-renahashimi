import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, urlLoad, restPage, baseUrl } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
// import { loadPage } from "../common/pageloader.js";
// import * as pageloader from "../common.js";



const pageNameBlog = document.querySelector(".pagename");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postContainer = document.querySelector(".postbox");
const postContainer3 = document.querySelector(".postbox2");


let currentCategory = 1;
let currentPage = 1;
let currentPosts = 6;


async function getPosts() {
   try {
    const response = await fetch(urlLoad);
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
                                                    <button class="r-m-btn">The recipe <span class="heart">&#9829;</span></button>
                                                </a>
                                            </div>
                                            <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                        </div>`;                                                      
            });
}

const postContent = document.querySelectorAll(".postcontent")
const filterBtn = document.querySelectorAll(".filter-btn");

filterBtn.forEach(function (catBtn) {
    catBtn.onclick = function (e) {
        filterPost(catBtn, filterBtn);
        const catFilter = e.target.value;
        console.log('Selected URL:', catFilter);

        postContainer.innerHTML = "";

        if (catFilter === 1) {
            currentCategory = 1;
            getPosts(catUrl,  postContent)
            console.log(currentCategory);
        } else {
            currentCategory = catFilter;
            const catUrl = urlLoad + `&categories=${currentCategory}&page=${currentPage}`;
            getPosts(catUrl, postContent);
            console.log('Category URL:', catUrl, catFilter);
        }
    }
});

function filterPost(filterOn) {
    filterBtn.forEach((catBtn) => catBtn.classList.remove("post-selected"));
    filterOn.classList.add("post-selected");      
}

// loadMoreBtn.addEventListener("click", async () => {
//     currentPage++;
//     const newUrl = urlLoad + `&categories=${currentCategory}&page=${currentPage}`;
//     await getPosts(newUrl);
//     console.log(newUrl);
//     loadMoreBtn.style.display = "none";
// });



// //<div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>