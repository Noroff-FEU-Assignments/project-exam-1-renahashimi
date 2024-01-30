import { errorMessage } from "../api/errormessage.js";
import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "../api/url.js";


loadMoreBtn.addEventListener("click", (e) => {
    const newUrl = BUTACUISINE_URL_MEDIA + restPage;
    postBox.innerHTML = "";
    loadPage()
    getPosts(newUrl);
    console.log(newUrl);
    loadMoreBtn.style.display = "none";
});
----------------------------------------------
function createCarouselPosts(posts) {

    const carouselContainer = document.createElement('a');
    carouselContainer.href = "blog-specific.html?id=" + posts.id;
    carouselContainer.className = 'carousel-container', 'wrapper';
    carouselContainer.id = posts.id;

    if (posts._embedded['wp:featuredmedia']) {
        const image = document.createElement('img');
        image.src = posts._embedded['wp:featuredmedia'][0].source_url;
        image.alt = posts._embedded['wp:featuredmedia'][0].alt_text;
        carouselContainer.append(image);
    } else {
        const noImage = document.createElement('p');
        noImage.innerText = 'No image available';
        carouselContainer.append(noImage);
    }

    const title = document.createElement('p');
    title.innerText = posts.title.rendered;
    carouselContainer.append(title);

    carousel.append(carouselContainer);
}

// Carousel buttons

const leftCarouselButton = document.querySelector('.prev');
const rightCarouselButton = document.querySelector('.next');

leftCarouselButton.addEventListener('click', () => {
    carousel.scrollLeft += -210;
});

rightCarouselButton.addEventListener('click', () => {
    carousel.scrollLeft += 210;
});

// Handle posts

function handlePost(posts) {
    for (let i = 0; i < posts.length; i++) {
        createHTML(posts[i]);
        createCarouselPosts(posts[i]);
    }
}

async function main() {
    const posts = await getPost();
    handlePost(posts);
}
------------------------------------------

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


        