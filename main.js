const pass = document.querySelector("#password");
const passConf = document.querySelector("#password-confirm");
const form = document.querySelector("#odin-form");
const passBadQuote = document.createElement("p");
passBadQuote.innerText = "*Passwords do not match";
passBadQuote.style.paddingTop = "5px";
passBadQuote.style.color = "red";

form.addEventListener("submit", (event) => {
  if (pass.value !== passConf.value) {
    event.preventDefault();
    pass.insertAdjacentElement("afterend", passBadQuote);
    pass.style.boxShadow = "inset 0 0 0 1px red";
    passConf.style.boxShadow = "inset 0 0 0 1px red";
  } else {
    pass.style.boxShadow = "";
    passConf.style.boxShadow = "";
    passBadQuote.remove();
  }
});