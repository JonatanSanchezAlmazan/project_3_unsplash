import { Photos } from "../components/Photos/Photos";
import { getRandom, page, perPage, places } from "./random";

export const renderMain = () => {
    const main = document.querySelector("main");
    const aToday = document.querySelector("#hoy");
    const aExplore = document.querySelector("#explorar");
    aToday.classList.remove("active");
    aExplore.classList.remove("active");
    main.innerHTML = "";
    const randomPage = getRandom(page);
    const randomePerPage = getRandom(perPage);
    const randomPlaces = getRandom(places);
    Photos(randomPage, randomePerPage, randomPlaces);
}