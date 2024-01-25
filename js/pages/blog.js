import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import { loadPage } from "../common/pageloader.js";
import * as pageloader from "../common.js";

// const perPage = 10;
// let page = 1;

const postBox = document.querySelector(".postbox");
const pageName = document.querySelector(".pagename");
const startAndSalad = document.querySelector(".ss");
const mainCourse = document.querySelector(".mc");
const filter = document.querySelector(".filter");

export async function getPosts() {
   try {
    const response = await fetch(BUTACUISINE_URL_MEDIA);
    const posts = await response.json(); 
    console.log(posts);
    
    //loadMorePost();
    loadPage();
    filter.innerHTML = "";
    postBox.innerHTML = "";
    pageName.innerHTML = `<h1>Blog Posts</h1>
                          <p>“Where heritage meets the plate.”</p>`;

    setTimeout (function() {
        posts.forEach(function (posts) {
            postBox.innerHTML += `<div class="postcontent">
                                        <a href="blogpage.html?id=${posts.id}">
                                            <img class="postsimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}">
                                            <h2 class="poststitle">${posts.title.rendered}</h2>
                                            <p class="shorttext">${posts.excerpt.rendered}</p>
                                            <button class="r-m-btn">The recipe <span class="heart">&#10084;</span></button>
                                        </a>
                                    </div>
                                <div><img class="butaimg" src="images/buta.png" alt="Buta"></div>`;                      
                            
});
}, 2500);


  

// function loadMorePost(){}
    

} catch(error) {
    console.log("Unknown error", error);
    postBox.innerHTML = errorMessage();
}
}


  
getPosts()



