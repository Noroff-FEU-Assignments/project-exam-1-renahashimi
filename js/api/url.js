
export const BUTACUISINE_URL = "https://butacuisine.renahashimi.no/wp-json/wp/v2/posts/";

const ending = "?per_page=12&_embed=wp:featuredmedia";
export const BUTACUISINE_URL_MEDIA = BUTACUISINE_URL + ending;

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");
export const url = BUTACUISINE_URL_MEDIA + id + "?_embed";
