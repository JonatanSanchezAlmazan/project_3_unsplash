import { getRandom, page, perPage, places } from '../../utils/random';
import { Photos } from '../Photos/Photos';

import './Today.css'

export const Today = async() => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionToday = document.createElement("section");
    const h2 = document.createElement("h2");
    sectionToday.classList.add("today");
    const randomPage = getRandom(page);
    const randomePerPage = getRandom(perPage);
    const randomPlaces = getRandom(places);
    h2.textContent = randomPlaces
    Photos(randomPage, randomePerPage, randomPlaces);
    sectionToday.appendChild(h2);
    main.appendChild(sectionToday);
}