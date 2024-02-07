
const url = "https://butacuisine.renahashimi.no/wp-json/wp/v2/"; 
const post = "posts";
const posts  = "posts/";
const page2Url = `?page=2`;
const embed = "?_embed";
const categ = "&per_page=6&categories=7";
const ending = "?per_page=12&_embed=wp:featuredmedia";
export const perPage = "?per_page=15&_embed";
export const restPage = "?per_page=25&_embed";

export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");

export const carouselUrl = url + posts + ending + categ;
export const categoryUrl = url + posts + ending;
export const BUTACUISINE_URL = url + posts + id + ending;
export const BUTACUISINE_URL_MEDIA = url + posts + perPage;
export const urlLoad = url + posts + perPage;
export const baseUrl = url + posts + page2Url;