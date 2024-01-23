import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector (".pre")
const slidePost = document.querySelector(".slidepost");
const slidePost1 = document.querySelector("#slidepost1");
const slidePost2 = document.querySelector("#slidepost2");
const slidePost3 = document.querySelector("#slidepost3");
 

// REFERENCE FOR CAROUSEL: https://youtu.be/9HcxHDS2w1s?si=AlX06ovT6-FNpefE
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
//END OF VIDEO - REFERENCE FOR CAROUSEL




async function carousel() {
    try{
        const response = await fetch(BUTACUISINE_URL_MEDIA);
        const posts = await response.json();
        console.log(posts);


        slidePost1.innerHTML = "";
        slidePost2.innerHTML = "";
        slidePost3.innerHTML = "";

    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 8){
            slidePost1.innerHTML += `<div class="postcontent2">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h3 class="poststitle">${posts[i].title.rendered}</h3>
                                <p class="shorttext">${posts[i].excerpt.rendered}</p>
                                <li class="carlink">Go to the recipe</li>
                                </a>
                              </div>`;
        }  
    }   
    
    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 124){
            slidePost2.innerHTML += `<div class="postcontent2">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h3 class="poststitle">${posts[i].title.rendered}</h3>
                                <p class="shorttext">${posts[i].excerpt.rendered}</p>
                                <li class="carlink">Go to the recipe</li>
                                </a>
                              </div>`;
        } 
    }   

    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id === 20){
            slidePost3.innerHTML += `<div class="postcontent2">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h3 class="poststitle">${posts[i].title.rendered}</h3>
                                <p class="shorttext">${posts[i].excerpt.rendered}</p>
                                <li class="carlink">Go to the recipe</li>
                                </a>
                              </div>`;
        } 
    }    

} catch(error) {
    console.log("Unknown error", error);
    postcontent2.innerHTML = errorMessage();
  }
}

carousel()