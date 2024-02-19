import { Photos } from "../components/Photos/Photos";
import { getRandom, page, perPage, places } from "./random";

export const renderMain = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const randomPage = getRandom(page);
    const randomePerPage = getRandom(perPage);
    const randomPlaces = getRandom(places);
    Photos(randomPage, randomePerPage, randomPlaces);
}