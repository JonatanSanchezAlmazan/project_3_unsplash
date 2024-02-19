import { Photos } from "../components/Photos/Photos";

export const search = () => {
    const btnSearch = document.querySelector("#search");
    const input = document.querySelector("#perPages").value;
    const select = document.querySelector("#places").value;
    const sectionExplore = document.querySelector(".explore");
    const pInfo = document.createElement("p");
    if (input === "") {
        pInfo.textContent = "Debes introducir un valor númerico en el input y una opción en el select"
        sectionExplore.appendChild(pInfo);
    } else {
        const pInfo = document.querySelector("p");
        if (pInfo) {
            pInfo.remove();
        }
        Photos(1, input, select);
        btnSearch.disabled = true;
    }

}