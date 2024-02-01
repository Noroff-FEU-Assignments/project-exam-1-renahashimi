import { BUTACUISINE_URL, BUTACUISINE_URL_MEDIA, perPage5, restPage } from "../api/url.js";

export async function getPosts() {
   try {
    const response = await fetch(BUTACUISINE_URL_MEDIA);
    const posts = await response.json(); 

    return posts;

} catch(error) {
    console.log("Something went wrong", error);
}

}
