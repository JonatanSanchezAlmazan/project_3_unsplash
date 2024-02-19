export const api = async(page, per_Page, query) => {
    const request = await fetch(`https://api.unsplash.com/search/photos?&pages=${page}&query=${query}&per_page=${per_Page}&client_id=${import.meta.env.VITE_ACCES_KEY}`);
    const response = await request.json();
    return response.results;
}