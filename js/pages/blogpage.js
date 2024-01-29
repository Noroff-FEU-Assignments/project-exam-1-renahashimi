import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";
import * as pageloader from "../common.js";
import { loadPage } from "../common/pageloader.js";

const postContainer2 = document.querySelector(".postcontainer2");
const postTitle = document.querySelector(".posttitle");
const postImage = document.querySelector(".postimage");
const postText = document.querySelector(".posttext");
const postQuote = document.querySelector(".postquote");


const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "GO BACK TO POSTS";



async function getSinglePosts() {
    try{
        const response = await fetch(BUTACUISINE_URL);
        const posts = await response.json();

        console.log(posts);

        createPosts(posts);
        loadPage();
        postContainer2.innerHTML += "";
        postTitle.innerHTML += "";
        postImage.innerHTML += "";
        postText.innerHTML += "";
        postQuote.innerHTML += "";

    } catch(error) {
    console.log("Unknown error", error);
    postContainer2.innerHTML = errorMessage();
    }
}
getSinglePosts();


function createPosts(posts){
    loadPage();
    postTitle.innerHTML += `<h1>${posts.title.rendered}</h1>`;
    postImage.innerHTML += `<img class="postimages" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}" onclick="">`;
    postText.innerHTML += `<p>${posts.content.rendered}</p>`;
    postQuote.innerHTML += `<p>Ready, Cook & <span>Bon Appetit</span></p>`;
}



//Modal 

    const imageUrl = document.querySelector(".postimages").src;
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelectorAll(".modalimg");
    const modalExit = document.querySelectorAll(".modalexit");
    console.log(imageUrl);
modalImg.src = imageUrl;

        imageUrl.addEventListener("click", () => {
            modal.showModal();
        })
    
        modalExit.addEventListener("click", () => {
            modal.close();
        })











