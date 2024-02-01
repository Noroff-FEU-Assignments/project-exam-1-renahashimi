export async function createPosts() {

    const postContent = document.querySelector(".postbox");
    postContent.classList.add("postcontent");
    postContent.href = `blogpage.html?id=${posts.id}`;

    //Render post details

    //Title
    const title = document.createElement("h2");
    title.textContent = posts.title.rendered;
    title.classList.add("poststitle");

    //Images
    const image = document.createElement("img");
    image.classList.add("postsimage");
    if (posts._embedded && posts._embedded["wp:featuredmedia"]) {
        const imgUrl = posts._embedded["wp:featuredmedia"][0].source_url;
        const imgAlt = posts._embedded["wp:featuredmedia"][0].alt_text;
    }

    //Content
    const text = document.createElement("p");
    text.innerHTML = posts.content.rendered;
    text.classList.add("shorttext");

    //Read more button 
    const readMoreBtn = document.createElement("a");
    readMoreBtn.classList.add("r-m-btn");
    readMoreBtn.textContent = "The recipe";
    readMoreBtn.href = `blogpage.html?id=${posts.id}`;

    postContent.appendChild(title);
    postContent.appendChild(image);
    postContent.appendChild(text);
    postContent.appendChild(readMoreBtn);

    return postContent;
}