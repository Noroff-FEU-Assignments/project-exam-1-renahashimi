
const baseUrl = "https://butacuisine.renahashimi.no/wp-json/wp/v2/"; 
const posts = "posts/";
const embed = "?_embed";
const ending = "?per_page=50&_embed=wp:featuredmedia";
export const perPage5 = "&per_page=10";
export const restPage = "?per_page=20&_embed";

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");

export const BUTACUISINE_URL = baseUrl + posts + id + ending;
export const BUTACUISINE_URL_MEDIA = baseUrl + posts + embed;
export const urlLoad = BUTACUISINE_URL + restPage + embed;
export const url = BUTACUISINE_URL + embed;
