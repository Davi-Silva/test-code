let inputpwd = document.querySelectorAll("input");
let submitBtn = document.querySelector("#submitBtn");

// inputpwd[3].value = "davi";
// inputpwd[4].value = "Davi";

if (inputpwd[3].value !== inputpwd[4].value) {
    console.log("The paswwords doesn't match with each other...");
}

inputpwd.forEach((inputs) => {
    inputs.addEventListener('input', () => {
        if (inputpwd[3].value !== inputpwd[4].value) {
            console.log("The paswwords doesn't match...");
            submitBtn.disabled = true;
            submitBtn.style.transition = "all .4s ease-in-out"
        } else {
            console.log("The password matches...")
            submitBtn.disabled = false;
            submitBtn.style.transition = "all .4s ease-in-out"
        }
    })
});