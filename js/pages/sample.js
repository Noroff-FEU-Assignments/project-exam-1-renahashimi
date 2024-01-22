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
   /*
    // Turn on the kettle button
    var powerButton = document.querySelector("#btn2");
    powerButton.addEventListener("click", function() {
    powerButton.textContent = "ON";
    powerButton.style.backgroundColor = "#46b84c";  
    console.log ("Kettle is on"); 
    });

} else if (indexImage.src.match ("/images/1.jpeg")){
    indexImage.src = "/images/2.jpeg"; 
    indexButton.innerHTML = "Water is boiled and the next step is...";
    indexText.innerHTML = "to fill the can with aromatic leaves and then with hot water";
    document.getElementById("btn2").style.display = "none";
} else if (indexImage.src.match ("/images/2.jpeg")){
    indexImage.src = "/images/3.avif";
    indexButton.innerHTML = "More waiting in process...";
    indexText.innerHTML = "Let the the sitt for 10 minutes";
} else if (indexImage.src.match ("/images/3.avif")){
    indexImage.src = "/images/4.jpeg";
    indexButton.innerHTML = "Now that the waiting is done...";
    indexText.innerHTML = "fill the cups with tea";  
} else if (indexImage.src.match ("/images/4.jpeg")){
    indexImage.src = "/images/5.jpeg";
    indexButton.innerHTML = "Finally, a good cup of tea";
    indexText.innerHTML = "and enjoy your tea with some sweets, such as baklava...mhhm";
} else {
    indexImage.src = "/images/0.jpeg";
    indexButton.innerHTML = alert("Do you love tea?"); 
    indexButton.innerHTML = "If you do, then let us make more tea.";
    indexText.innerHTML = "";
}
}
console.log (changeText);*/