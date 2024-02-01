
const baseUrl = "https://butacuisine.renahashimi.no/wp-json/wp/v2/"; 
const post = "posts";
const posts  = "posts/";
const embed = "?_embed";
const categ = "&categories=6";
const ending = "?per_page=12&_embed=wp:featuredmedia";
export const perPage = "&per_page=12";
export const restPage = "?per_page=12&_embed";

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");

export const carouselUrl = baseUrl + posts + embed + ending + categ;
export const BUTACUISINE_URL = baseUrl + posts + id + ending;
export const BUTACUISINE_URL_MEDIA = baseUrl + posts + embed;
export const urlLoad = BUTACUISINE_URL + restPage + embed;
