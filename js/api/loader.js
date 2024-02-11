export function showLoader() {
    const loader = document.querySelector(".loader");
    const loadInd = document.querySelector(".loader-indicator");
    

    setTimeout(function(){
   loader.style.display = "block";
    loadInd.style.display = "block";
    }, 3000);
 
}
export function hideLoader() {
    const loader = document.querySelector(".loader");
    const loadInd = document.querySelector(".loader-indicator");

    setTimeout(function(){
        loader.style.display = "none";
         loadInd.style.display = "none";
        }, 3000);
}

