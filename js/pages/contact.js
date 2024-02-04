const form = document.querySelector("#c-form");
const fullname = document.querySelector("#fullname");
const fullnameErr = document.querySelector("#fullnameerror");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailerror");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjecterror");
const message = document.querySelector("#message");
const messageErr = document.querySelector("#messageerror");
const formSuccess = document.querySelector(".formsuccess");
        
function validateContactForm (event) {
    event.preventDefault();
    
    if (checkLength(fullname.value, 4) === true){
        fullnameErr.style.display = "none"; 
    } else {
        fullnameErr.style.display = "block";
    }

    if (validEmail(email.value) === true){
        emailErr.style.display = "none"; 
    } else {
        emailErr.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true){
        subjectErr.style.display = "none"; 
    } else {
        subjectErr.style.display = "block";
    }
    
    if (checkLength(message.value, 24) === true){
        messageErr.style.display = "none"; 
    } else {
        messageErr.style.display = "block";
    }
}
form.addEventListener("submit", validateContactForm);

    function submitMessage (event) {
        event.preventDefault();
        if (
            checkLength(fullname.value, 4) &&
            validEmail(email.value) &&
            checkLength(subject.value, 14) &&
            checkLength(message.value, 24)
        ) { 
            // alert("Thank you for contacting us!");
        formSuccess.innerHTML = `<div class="successmessage">
                                    <p>Thank you for contacting us!</p>
                                    <p>We will contact you shortly.</p>
                                </div>`
        
        form.reset();
        form.submit();
        }  
}
    form.addEventListener("submit", submitMessage);

function validEmail(email) {
    const regEx = /\S+@\S+\.[a-zA-Z]{2,4}/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return value.trim().length >len;
    }
} 



