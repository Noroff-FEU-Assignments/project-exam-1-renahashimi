import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { filterBtn } from "./sample.js";

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector (".pre")
const slidePost = document.querySelector(".slidepost");
const slidePost1 = document.querySelector(".slidepost1");
const slidePost2 = document.querySelector(".slidepost2");
const slidePost3 = document.querySelector(".slidepost3");
const slide = Array.from(slidePost.children);
 
const postWidth = slide[0].getBoundingClientRect().width;
console.log(postWidth);

// slide[0].style.left = 0;
// slide[1].style.left = postWidth * 1 + "px";
// slide[2].style.left = postWidth * 2 + "px";
async function carousel() {
    try{
        const response = await fetch(BUTACUISINE_URL_MEDIA);
        const posts = await response.json();
        console.log(posts);

/* POST POSITION */
slide.forEach((slides, index) =>{
    slides.style.left = postWidth * index + "px";
});

nextBtn.addEventListener("click", e =>{
    const activeSlide = document.querySelector(".active-slide");
    const nextslide = activeSlide.nextElementSibling;
    const moveSlide = nextslide.style.left;
    filterBtn();
    slidePost.style.transform = "translateX(-" + moveSlide + ")";
    console.log(activeSlide);
})



        slidePost1.innerHTML = "";
        slidePost2.innerHTML = "";
        slidePost3.innerHTML = "";

    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 8){
            slidePost1.innerHTML += `<div class="postcontent">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h2 class="poststitle">${posts[i].title.rendered}</h2>
                                </a>
                              </div>`;
        }  
    }   
    
    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 124){
            slidePost2.innerHTML += `<div class="postcontent">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h2 class="poststitle">${posts[i].title.rendered}</h2>
                                </a>
                              </div>`;
        } 
    }   

    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 20){
            slidePost3.innerHTML += `<div class="postcontent">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h2 class="poststitle">${posts[i].title.rendered}</h2>
                                <button class="r-m-btn">Read more</button>
                                </a>
                              </div>`;
        } 
    }    

} catch(error) {
    console.log("Unknown error", error);
    // .innerHTML = errorMessage();
}
}

carousel()