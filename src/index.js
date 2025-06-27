import "./style.css";
import { loadHomepage } from "./home";
import { loadMenu } from "./menu";
import { loadReservations } from "./reservations";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const reservationButton = document.querySelector(".reservation-button");

function clearDivContents(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

loadHomepage();

homeButton.addEventListener("click",() => {
    contentDiv.classList.remove("menu");
    clearDivContents(contentDiv);
    loadHomepage();
});

menuButton.addEventListener("click",() => {
    clearDivContents(contentDiv);
    loadMenu();
});

reservationButton.addEventListener("click",() => {
    contentDiv.classList.remove("menu");
    clearDivContents(contentDiv);
    loadReservations();
});