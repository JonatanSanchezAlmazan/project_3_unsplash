import { Photos } from "../components/Photos/Photos";
import { clean } from "./clean";
import { search } from "./search";

export const btnOpen = () => {
    const btnOpen = document.querySelector("#open_menu");
    const nav = document.querySelector(".nav");
    btnOpen.addEventListener("click", () => nav.classList.toggle("nav_visible"));
}

export const btnClouse = () => {
    const btnClouse = document.querySelector("#clouse_menu");
    const nav = document.querySelector(".nav");
    btnClouse.addEventListener("click", () => nav.classList.toggle("nav_visible"));
}

export const btnSearch = () => {
    const btnSearch = document.querySelector("#search");
    btnSearch.addEventListener("click", search)
}

export const btnClean = () => {
    const btnClean = document.querySelector("#clean");
    btnClean.addEventListener("click", clean)
}