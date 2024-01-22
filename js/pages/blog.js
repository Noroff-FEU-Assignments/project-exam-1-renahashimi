import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";

const postBox = document.querySelector(".postbox");
const pageName = document.querySelector(".pagename");
const startAndSalad = document.querySelector(".ss");
const mainCourse = document.querySelector(".mc");



export async function getPosts() {
   try {
    const response = await fetch(BUTACUISINE_URL_MEDIA);
    const posts = await response.json(); 
    console.log(posts);
    
    postBox.innerHTML = "";
    pageName.innerHTML = `<h1>Blog Posts</h1>
                          <p>“Where heritage meets the plate.”</p>`;


    for (let i = 0; i <posts.length; i++) {
        
        postBox.innerHTML += `<div class="postcontent">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h2 class="poststitle">${posts[i].title.rendered}</h2>
                                <p class="shorttext">${posts[i].excerpt.rendered}</p>
                                <button class="r-m-btn">Read more</button>
                                </a>
                              </div>
                              <div><img class="butaimg" src="images/buta.png" alt="Buta"></div>`;                      
                        
}
} catch(error) {
    console.log("Unknown error", error);
    postBox.innerHTML = errorMessage();
}
}
  
getPosts()


