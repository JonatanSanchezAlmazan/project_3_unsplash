import { api } from '../../utils/api';
import { Photo } from '../Photo/Photo';
import './Photos.css'

export const Photos = async(page, perPage, query) => {
    const photos = await api(page, perPage, query);
    const main = document.querySelector("main");
    const sectionPhotos = document.createElement("section");
    sectionPhotos.className = "photos";
    sectionPhotos.innerHTML = "";
    photos.forEach(photo => {
        sectionPhotos.innerHTML += Photo(photo);
    });
    main.appendChild(sectionPhotos);
}