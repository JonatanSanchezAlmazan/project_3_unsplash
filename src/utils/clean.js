export const clean = () => {
    const btnSearch = document.querySelector("#search");
    const input = document.querySelector("#perPages");
    const select = document.querySelector("#places");
    const sectionPhotos = document.querySelector(".photos");
    sectionPhotos.remove();
    input.value = "";
    select.selectedIndex = 0;
    btnSearch.disabled = false;
}