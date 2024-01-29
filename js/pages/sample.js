import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";


async function filterBtn() {
const startAndSalad= document.querySelector(".ss");
const mainCourse = document.querySelector(".mc");
const sweets = document.querySelector(".sw");
const postBox = document.querySelector(".postbox");

    try {
        const response = await fetch(BUTACUISINE_URL);
        const posts = await response.json(); 
        console.log(posts);



        postBox.innerHTML = "";

    for (let i = 0; i <posts.length; i++) {
        startAndSalad.forEach(post => {
            addEventListener
        });((post) =>{
        if (posts[i].categories[0] === 6) {
            postBox.innerHTML = `<div class="postcontent">
                               <a href="blogpage.html?id=${posts[i].id}">
                                <img class="postsimage" src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i].title.rendered}">
                                <h2 class="poststitle">${posts[i].title.rendered}</h2>
                                <p class="shorttext">${posts[i].excerpt.rendered}</p>
                                <button class="r-m-btn">Read more</button>
                                </a>
                              </div>`;
        }  });
    }
} catch(error) {
        console.log("Unknown error", error);
        postBox.innerHTML = errorMessage();
}
}

filterBtn()


unction createPostCard(posts) {
    loadPage();
    
        const postContent = document.createElement("a");
        postContent.className ="postcontent";
        postContent.href = "blogpage.html?id=" + posts.id;
        postContent.id = posts.id;

        const postsImage = document.createElement("img");
        postsImage.className ="postsimage";
        postsImage.src = posts._embedded["wp:featuredmedia"][0].source_url;
        postsImage.alt = posts.title.rendered;
        postsImage.href = "blogpage.html?id=" + posts.id;
        postContent.append(postsImage);

        const title = document.createElement("h2");
        title.className ="poststitle";
        title.href = "blogpage.html?id=" + posts.id;
        title.innerText = posts.title.rendered;
        postContent.append(title);

        const shortText = document.createElement("p");
        shortText.className ="shorttext";
        shortText.href = "blogpage.html?id=" + posts.id;
        shortText.innerText = posts.excerpt.rendered;
        postContent.append(shortText);


        