import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";
import { errorMessage } from "../api/errormessage.js";


export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");
export const url = BUTACUISINE_URL + id + "?_embed";
console.log(url);
const postContainer2 = document.querySelector(".postcontainer2");
const postTitle = document.querySelector(".posttitle");
const postImage = document.querySelector(".postimage");
const postText = document.querySelector(".posttext");
const postQuote = document.querySelector(".postquote");


const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "GO BACK TO POSTS";



async function getSinglePosts() {
    try{
        const response = await fetch(url);
        const posts = await response.json();

        createPosts(posts);
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
    function createPosts(posts){
        
        postTitle.innerHTML += `<h1>${posts.title.rendered}</h1>`;
        postImage.innerHTML += `<div><img class="postimages" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}"></div>`;
        postText.innerHTML += `<p>${posts.content.rendered}</p>`;
        postQuote.innerHTML += `<p>Ready, Cook & <span>Bon Appetit</span></p>`;
    
        console.log(posts, postTitle);
}

getSinglePosts()

