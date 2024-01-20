export function errorMessage (message) {
    message = "Something went wrong!"; 
    return `<div class="errorMessage">${message}</div>`;
  }
  errorMessage();