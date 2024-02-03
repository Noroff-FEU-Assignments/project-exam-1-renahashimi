import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import * as pageloader from "../common.js";
import { loadPage } from "../common/pageloader.js";
import { getPosts } from "../api/getPosts.js";

const postContainer2 = document.querySelector(".postcontainer2");
const postTitle = document.querySelector(".posttitle");
const postImage = document.querySelector(".postimage");
const postText = document.querySelector(".posttext");
const postQuote = document.querySelector(".postquote");
const modalBox = document.querySelector(".modalbox");


const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "GO BACK TO POSTS";



async function getSinglePosts() {
    try{
        const response = await fetch(BUTACUISINE_URL);
        const posts = await response.json();

        console.log(posts);
        if (!posts) {
            console.error("Posts not found");
            return;
        }

        createPosts(posts);
        //setupLikePosts(posts);
    
        
        const modalImg = document.querySelector(".postimages");
        modalImg.addEventListener("click", modal);

        console.log(modalImg);

    } catch(error) {
    console.log("Unknown error", error);
    postContainer2.innerHTML = errorMessage();
    }
}
getSinglePosts();


//Modal 
function modal(){
    const modalImage = document.querySelector(".modalimage");
    modalImage.classList.add("open");
    modalImage.addEventListener("click", () => {
        modalImage.classList.remove("open")

        //console.log(modal, modalImage, modalbox);
    });
}


function createPosts(posts){
    const imgUrl = posts._embedded["wp:featuredmedia"][0].source_url;
    const imgAlt = posts._embedded["wp:featuredmedia"][0].alt_text;


    postTitle.innerHTML += `<h1>${posts.title.rendered}</h1>`;
    postImage.innerHTML += `<img class="postimages" src="${imgUrl}" alt="${imgAlt}">`;
    modalBox.innerHTML += `<div class="modalimage"><div class="modalcontent"><img src="${imgUrl}" alt="${imgAlt}"></div></div>`;
    postText.innerHTML += `<p>${posts.content.rendered}</p>
                           <div class="post-aut-date3">
                            <i class="fa-solid fa-pen-nib fa-xs" style="color: #000000;"> Rena Hashimi</i> 
                            <i class="fa-solid fa-calendar-days fa-xs" style="color: #000000;"> ${posts.date.slice(0, -9)} </i> 
                          </div>`;
    postQuote.innerHTML += `<p>Ready, Cook & <span>Bon Appetit</span></p>`;
}console.log(modalBox.innerHTML);


async function setupLikePosts() {
    try {
        let morePosts = await getPosts(BUTACUISINE_URL_MEDIA);
        
        const likePosts = document.querySelector(".likeposts");

        if (!morePosts) {
            console.error("Posts not found");
            return;
        }

        morePosts.forEach((post) => {
            const imgUrl = post._embedded["wp:featuredmedia"][0].source_url;
            const imgAlt = post._embedded["wp:featuredmedia"][0].alt_text;
    
            likePosts.innerHTML += `<div class="morepostcontent">
                                        <img class="postimages" src="${imgUrl}" alt="${imgAlt}">
                                        <h4>${post.title.rendered}</h4>
                                    </div>`;
        });
        
    }catch(error) {
        console.log("Unknown error", error);
        likePosts.innerHTML = errorMessage();
    }
}
setupLikePosts();




