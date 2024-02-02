
const url = "https://butacuisine.renahashimi.no/wp-json/wp/v2/"; 
const post = "posts";
const posts  = "posts/";
const embed = "?_embed";
const categ = "&categories=3";
const ending = "?per_page=12&_embed=wp:featuredmedia";
export const perPage = "?per_page=12&_embed";
export const restPage = "?per_page=12&_embed";

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");

export const carouselUrl = url + posts + embed + ending + categ;
export const BUTACUISINE_URL = url + posts + id + ending;
export const BUTACUISINE_URL_MEDIA = url + posts + restPage;
export const urlLoad = url + posts + perPage;
export const baseUrl = url + posts;