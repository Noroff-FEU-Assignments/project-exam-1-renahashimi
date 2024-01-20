import { BUTACUISINE_URL } from "./url.js";


export async function getApiSinglePosts () {

    const params = new URLSearchParams (document.location.search);
    const id = params.get ("id");
    const API_BASE_URL = "" + id;
    
          const response = await fetch(BUTACUISINE_URL);
          const posts = await response.json();
    console.log(posts);
        return posts;
        
};

