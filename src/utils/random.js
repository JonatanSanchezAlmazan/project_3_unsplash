export const places = [
    "Montaña",
    "Playa",
    "Francia",
    "Estados Unidos",
    "Australia",
    "Japón",
    "África",
    "Jardín",
    "Marvel",
    "Ordenador",
    "Nieve",
    "Oceano",
    "Tortugas",
    "Peces",
    "Animales",
    "Javascript",
    "Full stack developer"
];
export const page = [1, 2, 3, 4, 5];
export const perPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}