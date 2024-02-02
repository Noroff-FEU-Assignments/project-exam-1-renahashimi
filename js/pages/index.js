import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, carouselUrl } from "../api/url.js";


let startPosts = 0;
let totalPagePost = 2;

const nextBtn = document.querySelector(".carbtnnext");
console.log(nextBtn);
const prevBtn = document.querySelector (".carbtnpre");
const carouselContainer = document.querySelector(".carousel");


async function fecthIndexData() {
  try {
      const response = await fetch(carouselUrl);
      const posts = await response.json();
      console.log(posts);

      setupWelcomeSection();
      displayCarousel(posts);
      carouselContainer.innerHTML += "";
      

   } catch(error) {
    console.log("Something went wrong", error);
  }
}

/* WELCOME */

function setupWelcomeSection(){
const welcomeImg = document.querySelector(".welcomeimg");
const welcomeTxt = document.querySelector(".welcometxt");
  
  welcomeImg.innerHTML += `<img src="/images/Pomegranate.png" alt="Pomegranate">`;
  welcomeTxt.innerHTML += `<h3>Welcome</h3>
                            <p>to my</p>
                            <p class="foodbold"><span>food</span> blog</p>
                            <a href="blog.html">All blogs</a>`;    

}

/* CAROUSEL */

function displayCarousel(posts) {
  posts.forEach((posts) => {
    const indexPost = `<div class="carouselcontent">
                                      <a href="blogpage.html?id=${posts.id}" class="caritem">
                                        <img class="carimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}">
                                        <div class="caritemblock">
                                          <div class="post-aut-date2">
                                            <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"> Rena Hashimi</i> 
                                            <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"> ${posts.date.slice(0, -9)} </i> 
                                          </div>
                                          <h4 class="cartitle">${posts.title.rendered}</h4>
                                          <p class="cartext">${posts.excerpt.rendered}</p>
                                          <button class="carlink">The recipe <span class="heart">&#9825;</span></button>
                                        </div> 
                                      </a>
                                    </div>`;
carouselContainer.innerHTML += indexPost;
  }); 
}


let currentIndex = 0;
const posts = document.querySelectorAll(".carouselcontent");

const allPosts = posts.length;

function carouselSlide(index) {
  const offset = -100 * index;
    carouselContainer.style.transform = `translateX(${offset}%)`; 
  };
  
nextBtn.addEventListener("click", function(){
  carouselContainer.style.transform = "translateX(-100%)";
  currentIndex = (currentIndex + 1)
  carouselSlide(currentIndex);

  if (currentIndex === posts.length -1) {
    nextBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }


});
prevBtn.addEventListener("click", function(){
  carouselContainer.style.transform = "translateX(0)";
  currentIndex = (currentIndex - 1)
  carouselSlide(currentIndex);

    
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

});


fecthIndexData()