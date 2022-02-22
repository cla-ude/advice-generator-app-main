import { getAdvice } from "./request.js";

const generateBtn = document.querySelector(".generate-container .wrapper");
const adviceID = document.querySelector(".advice-id");
const quoteMessage = document.querySelector(".quote");
let firstQuote = true;

async function changeElements() {
  const quote = await getAdvice();
  adviceID.innerHTML = quote.id;
  quoteMessage.innerHTML = `"${quote.advice}"`;
}

if (firstQuote) {
  changeElements();
  firstQuote = false;
}

generateBtn.addEventListener("click", changeElements);

console.log("Hello");
