posts.forEach(function (posts) {
    postBox.innerHTML += `<div class="postcontent">
                                <img class="postsimage" src="${posts._embedded["wp:featuredmedia"][0].source_url}" alt="${posts.title.rendered}">
                                <a href="blogpage.html?id=${posts.id}">
                                    <h2 class="poststitle">${posts.title.rendered}</h2>
                                    <p class="shorttext">${posts.excerpt.rendered}</p>
                                    <button class="r-m-btn">The recipe <span class="heart">&#10084;</span></button>
                                </a>
                            </div>
                        <div><img class="butaimg" src="images/buta.png" alt="Buta"></div>`;                      
                    


});

    
function showModal(imagesrc) {
    modal.style.display = "block";
    modalImg.src = imagesrc;
}
console.log(imageSrc);

function hideModal () {
    modal.style.display = "none";
}

document.querySelector(".postimage").addEventListener("click", function (event) {
    if (event.target.tagname === "IMG") {
        showModal();
    }
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modalClose();
    }
});