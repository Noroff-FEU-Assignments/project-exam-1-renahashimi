export function loadPage(){ 
    const load = document.querySelector(".loader");
    const loader = document.querySelector(".loader-indicator");
    load.innerHTML = "Loading...";

    setTimeout (function () {
        loader.style.display = "none";
        load.style.display = "none";
    }, 2800);
}