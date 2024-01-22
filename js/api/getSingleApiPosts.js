import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA } from "./url.js";

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");
export const url = BUTACUISINE_URL_MEDIA + id + "?_embed";

export async function getApiPosts() {
    try{
        const response = await fetch(url);
        const posts = await response.json();

        return posts;

} catch(error) {
    console.log("Unknown error", error);
    main.innerHTML = errorMessage();
}
}

