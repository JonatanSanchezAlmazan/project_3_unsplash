import './Photo.css'

export const Photo = (photo) => {
    const { urls, alt_description } = photo;
    return `    
      <div class = "img-wrp">
        <img src = ${urls.regular} alt = ${alt_description}
      </div>
   
    
    
    `
}