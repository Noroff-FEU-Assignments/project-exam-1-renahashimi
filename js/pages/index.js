import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, carouselUrl } from "../api/url.js";


let startPosts = 0;
let totalPagePost = 2;

const nextBtn = document.querySelector(".carbtnnext");
console.log(nextBtn);
const prevBtn = document.querySelector (".carbtnpre");
const carouselContainer = document.querySelector(".carousel");

/* WELCOME */

const welcomeImg = document.querySelector(".welcomeimg");
const welcomeTxt = document.querySelector(".welcometxt");

welcomeImg.innerHTML += `<img src="/images/Pomegranate.png" alt="Pomegranate">`;
welcomeTxt.innerHTML += `<h3>Welcome</h3>
                          <p>to my</p>
                          <p class="foodbold"><span>food</span> blog</p>
                          <a href="blog.html">All blogs</a>`;    



async function carousel() {
  try {
      const response = await fetch(carouselUrl);
      const posts = await response.json();
      console.log(posts);
     
      carouselContent(posts);
      carouselContainer.innerHTML += "";
      

   } catch(error) {
    console.log("Something went wrong", error);
  }
}
carousel();

function carouselContent(posts) {
  posts.forEach(function (posts) {
    carouselContainer.innerHTML += `<div class="carouselcontent">
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
  }); 
}

  nextBtn.addEventListener("click", function() {
    carouselContainer.style.animation = "slides 14s forwards";
});

prevBtn.addEventListener("click", function() {
  carouselSpinner.style.animation = "slides 14s forwards";
});

// prevBtn.addEventListener("click", () => {
//   carouselContainer.scrollLeft += -1000;
// });
// nextBtn.addEventListener("click", () => {
//   carouselContainer.scrollLeft += 1000;
// });

// REFERENCE FOR CAROUSEL: https://youtu.be/9HcxHDS2w1s?si=AlX06ovT6-FNpefE
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });
// //END OF VIDEO - REFERENCE FOR CAROUSEL

//       for (let i = 0; i <posts.length; i++) {
//         if (posts[i].id === 149){
//             slidePost1.innerHTML += `<div class="postcontent">
//                                <a href="blogpage.html?id=${posts[1].id}">
//                                 <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
//                                 <h2 class="poststitle">${posts[i].title.rendered}</h2>
//                                 <p class="shorttext">${posts[i].excerpt.rendered}</p>
//                                 <li class="carlink">Go to the recipe</li>
//                                 </a>
//                               </div>`;
//         } if (posts[i].id === 157){
//             slidePost2.innerHTML += `<div>
//                                <a href="blogpage.html?id=${posts[i].id}">
//                                 <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
//                                 <h3 class="poststitle">${posts[i].title.rendered}</h3>
//                                 <p class="shorttext">${posts[i].excerpt.rendered}</p>
//                                 <li class="carlink">Go to the recipe</li>
//                                 </a>
//                               </div>`;
//         } if (posts[i].id === 20){
//             slidePost3.innerHTML += `<div>
//                                <a href="blogpage.html?id=${posts[i].id}">
//                                 <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
//                                 <h3 class="poststitle">${posts[i].title.rendered}</h3>
//                                 <p class="shorttext">${posts[i].excerpt.rendered}</p>
//                                 <li class="carlink">Go to the recipe</li>
//                                 </a>
//                               </div>`;
//         } 
   

