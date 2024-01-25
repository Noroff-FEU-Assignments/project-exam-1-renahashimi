export function loadPage(){ 
    const load = document.querySelector(".loader");
    const loader = document.querySelector(".loader-indicator");
    load.innerHTML = "Loading...";

    setTimeout (function () {
        loader.classList.remove("loader-indicator");
        load.style.display = "none";
    }, 2800);
}