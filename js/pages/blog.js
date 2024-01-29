import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, perPage5, restPage } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import { loadPage } from "../common/pageloader.js";
import * as pageloader from "../common.js";

const pageName = document.querySelector(".pagename");
const filter = document.querySelector(".filter");
const loadMoreBtn = document.querySelector(".loadmorebtn");
const postBox = document.querySelector(".postbox");

const baseUrl = BUTACUISINE_URL_MEDIA + perPage5;

async function getPosts(baseUrl) {
   try {
    const response = await fetch(baseUrl);
    const posts = await response.json(); 
    
    console.log(posts);

    //loadMorePosts();
    loadPage();
    createPost(posts);
    filter.innerHTML = "";
    pageName.innerHTML = `<h1>Blog Posts</h1>
                          <p>“Where heritage meets the plate.”</p>`;
     return posts;
   
} catch(error) {
    console.log("Unknown error", error);
   // postBox.innerHTML = errorMessage();
}

}
getPosts(baseUrl);



function createPost(posts) {
    loadPage();
        posts.forEach(function (posts) {
            postBox.innerHTML += `<div>
                                    <div class="postcontent">
                                        <a href="blogpage.html?id=${posts.id}">
                                            <img class="postsimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}">
                                            <h2 class="poststitle">${posts.title.rendered}</h2>
                                            <p class="shorttext">${posts.excerpt.rendered}</p>
                                            <button class="r-m-btn">The recipe <span class="heart">&#10084;</span></button>
                                        </a>
                                    </div>
                                    <div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>
                                </div>`;                                                      
    });
}

loadMoreBtn.addEventListener("click", (e) => {
    const newUrl = BUTACUISINE_URL_MEDIA + restPage;
    postBox.innerHTML = "";
    loadPage()
    getPosts(newUrl);
    console.log(newUrl);
    loadMoreBtn.style.display = "none";
});



//<div><img class="butaimg" src="images/buta.png" alt="Buta-Logo"></div>