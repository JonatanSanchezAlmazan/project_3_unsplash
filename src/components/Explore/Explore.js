import { btnClean, btnSearch } from '../../utils/buttons';
import { places } from '../../utils/random';
import { createButtons } from '../Buttons/Buttons';
import { Photos } from '../Photos/Photos';
import './Explore.css'

export const Explore = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionExplore = document.createElement("section");
    sectionExplore.classList.add("explore");
    const label = document.createElement("label");
    label.textContent = "Introduce el número de imagenes que quieres buscar:"
    const input = document.createElement("input");
    input.type = "number";
    input.id = "perPages"
    const select = document.createElement("select");
    select.id = "places";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Seleccione una opción";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    places.forEach(place => {
        const option = document.createElement("option");
        option.textContent = place;
        option.value = place;
        select.appendChild(option);
    });

    sectionExplore.appendChild(label);
    sectionExplore.appendChild(input);
    sectionExplore.appendChild(select);
    sectionExplore.appendChild(createButtons("search", "btn", "Search"));
    sectionExplore.appendChild(createButtons("clean", "btn", "Clean Filter"));
    main.appendChild(sectionExplore);
    btnSearch();
    btnClean();
}