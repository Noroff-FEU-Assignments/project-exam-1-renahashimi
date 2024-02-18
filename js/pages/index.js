import { errorMessage } from "../api/errormessage.js";
import { getPosts } from "../api/getPosts.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, carouselUrl, categoryUrl} from "../api/url.js";
import { showLoader, hideLoader } from "../common/loader.js";


async function fecthIndexData() {
  try {
      const response = await fetch(carouselUrl);
      const posts = await response.json();

      showLoader()

      if (!posts) {
        console.error("Posts not found");
        return;
      }

      setupWelcomeSection();
      displayCarousel(posts);
      carouselContainer.innerHTML += "";
      

   } catch(error) {
    console.error("Something went wrong", error);
    hideLoader()
  } finally {
    hideLoader()
  }
}

/* WELCOME */

function setupWelcomeSection(){
const welcomeImg = document.querySelector(".welcomeimg");
const welcomeTxt = document.querySelector(".welcometxt");
  welcomeImg.innerHTML += `<h1 class="welcome">Welcome</h1>`;
  welcomeTxt.innerHTML += `<p>to my food blog</p>`; 

}

/* CAROUSEL */

const carouselContainer = document.querySelector(".carousel");

function displayCarousel(posts) {
  setTimeout (function () {
    posts.forEach((post) => {
      const indexPost = `<div class="carouselcontent">
                          <a href="blogpage.html?id=${post.id}" class="caritem">
                          <img class="carimage" src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post.title.rendered}"> 
                          <div class="caritemblock">
                            <div class="post-aut-date2">
                              <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"> Rena Hashimi</i> 
                              <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"> ${post.date.slice(0, -9)} </i> 
                            </div>
                            <h4 class="cartitle">${post.title.rendered}</h4>
                            <div class="cartext">${post.excerpt.rendered}</div>
                            <button class="carlink">The recipe <span class="heart">&#9825;</span></button>
                          </div> 
                          </a>
                        </div>`;


    carouselContainer.innerHTML += indexPost;
    }); 
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function(){
let currentIndex = 0;
let posts = document.querySelectorAll(".carouselcontent");

const nextBtn = document.querySelector(".carbtnnext");
const prevBtn = document.querySelector (".carbtnpre");

function carouselSlide(index) {
  const offset = -90 * index;
    carouselContainer.style.transform = `translateX(${offset}%)`; 
  };

let allPosts = 6;
  
  nextBtn.addEventListener("click", function(){
    if (currentIndex < allPosts - 1) {
      currentIndex++;
      carouselSlide(currentIndex);
      prevBtn.classList.remove("disabled");
    } 
    if (currentIndex === allPosts - 1) {
      nextBtn.classList.add("disabled");
    }

  });
  prevBtn.addEventListener("click", function(){
    if (currentIndex > 0) {
      currentIndex--;
      carouselSlide(currentIndex);

      nextBtn.classList.remove("disabled");
    } 
    if (currentIndex === 0) {
      prevBtn.classList.add("disabled");
    }
  });
});

fecthIndexData()