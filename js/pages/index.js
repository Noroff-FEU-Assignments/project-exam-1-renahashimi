import { errorMessage } from "../api/errormessage.js";
import { getPosts } from "../api/getPosts.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, carouselUrl, categoryUrl} from "../api/url.js";


let startPosts = 0;
let totalPagePost = 2;

const carouselContainer = document.querySelector(".carousel");


async function fecthIndexData() {
  try {
      const response = await fetch(carouselUrl);
      const posts = await response.json();
      console.log(posts);

      if (!posts) {
        console.error("Posts not found");
        return;
      }

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
  //<img src="/images/Pomegranate.png" alt="Pomegranate">,  <p class="foodbold"><span>food</span> blog</p>
  welcomeImg.innerHTML += `<h1>Welcome</h1>`;
  welcomeTxt.innerHTML += `<p>to my food blog</p>
                          <a href="blog.html">All blogs</a>`; 

}

/* CAROUSEL */

function displayCarousel(posts) {
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
const allPosts = posts.length;
console.log(allPosts);
  }); 
}

document.addEventListener("DOMContentLoaded", function(){
let currentIndex = 0;
let posts = document.querySelectorAll(".carouselcontent");

console.log(posts);


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



// function fecthPostsByCategory(categoryUrl) {
//   return async () => {
//     try {
//       const response = await fetch(categoryUrl);
//       const posts = await response.json();

//       if (!posts || posts.length === 0) {
//         console.error("Posts not found");
//         return;
//       }
//       const postsJson = encodeURIComponent(JSON.stringify(posts));
//       window.location.href = `blogpage.html?category=${carouselUrl}`;

//     } catch(error) {
//       console.log("Something went wrong", error);
//     }
//   };
// }

// let sweets = "&per_page=10&categories=4";
// let mainC = "&per_page=10&categories=3";
// let saladStart = "&per_page=10&categories=6";
// document.querySelector(".s-s").addEventListener("click", fecthPostsByCategory(carouselUrl + saladStart));
  

// document.querySelector(".m-s");
// document.querySelector(".c-s");
// document.querySelector(".allrec");















// // let sweets = "&per_page=10&categories=4";
// // let mainC = "&per_page=10&categories=3";
// // let saladStart = "&per_page=10&categories=6";


// // const saladAndStarters = document.querySelector(".s-s");

// // saladAndStarters.addEventListener("click", async () => {
// //   const ssUrl = categoryUrl + saladStart;
// // console.log(ssUrl);
// //  await fecthIndexData(ssUrl)

// //   window.location.href = "blogpage.html? + ssUrl";
// // })


// // const mainCourse = document.querySelector(".m-s");
// // const cakesAndSweets = document.querySelector(".c-s");
// // const allBlogs = document.querySelector(".allrec");


fecthIndexData()