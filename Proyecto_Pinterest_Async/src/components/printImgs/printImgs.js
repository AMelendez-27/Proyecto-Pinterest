import { createCard } from "../card/card";


//IMPORT ACCESS KEY
const accessKey = "x72r3FI3LJ6cPaAe2zj8cxJ2ScQWT4Rx7w70ENrvJ-4";


//GET SEARCH KEY WORD FROM SEARCH BAR (FORM)
export const printImgs = () => {
  document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    const imageContainer = document.getElementById('imgContainer');
    imageContainer.innerHTML = ''; 
    
    //GET THE IMGS
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${accessKey}`);
      const data = await response.json();

      const profilePicResponse  = await fetch(`https://api.unsplash.com/search/photos?query=face&client_id=${accessKey}`);
      const profilePicData = await profilePicResponse.json();


      //IF THERE ARE NO RESULTS FOR THE KEYWORD DO THIS
      if (!data.results || data.results.length === 0) {
        imageContainer.innerHTML = '';
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = "No se ha encontrado ninguna coincidencia. Mostrando imágenes de gatos como ejemplo:";
        imageContainer.appendChild(noResultsMessage);

        //FETCH IMAGES FOR "CAT" AS AN ALTERNATIVE 
        const catResponse = await fetch(`https://api.unsplash.com/search/photos?query=cat&per_page=30&client_id=${accessKey}`);
        const catData = await catResponse.json();

        let profileIndex = 0;
        catData.results.forEach((image) => {
          const profilePic = profilePicData.results[profileIndex % profilePicData.results.length];
          createCard(image, profilePic, imageContainer);
          profileIndex++;
        });

        return;
      }

      //IF THE IMGS ARE FOUND PRINT THEM
      let profileIndex = 0; 
      data.results.forEach((image) => {
        const profilePic = profilePicData.results[profileIndex % profilePicData.results.length];
        createCard(image, profilePic, imageContainer);
        profileIndex++;
      });

    } catch (error) {
      console.error("Error al obtener imágenes:", error);
    }
  });
};

//FIRST REQUEST
export const printFirstRequestedImgs = async (firstSearch) => {
    const query = firstSearch;
    const imageContainer = document.getElementById('imgContainer');
    imageContainer.innerHTML = ''; 
    
    //GET THE IMGS
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${accessKey}`);
      const data = await response.json();

      const profilePicResponse  = await fetch(`https://api.unsplash.com/search/photos?query=face&client_id=${accessKey}`);
      const profilePicData = await profilePicResponse.json();


      //IF THERE ARE NO RESULTS FOR THE KEYWORD DO THIS
      if (!data.results || data.results.length === 0) {
        imageContainer.innerHTML = '';
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = "No se ha encontrado ninguna coincidencia. Mostrando imágenes de gatos como ejemplo:";
        imageContainer.appendChild(noResultsMessage);

        //FETCH IMAGES FOR "CAT" AS AN ALTERNATIVE 
        const catResponse = await fetch(`https://api.unsplash.com/search/photos?query=cat&per_page=30&client_id=${accessKey}`);
        const catData = await catResponse.json();

        let profileIndex = 0;
        catData.results.forEach((image) => {
          const profilePic = profilePicData.results[profileIndex % profilePicData.results.length];
          createCard(image, profilePic, imageContainer);
          profileIndex++;
        });

        return;
      }

      //IF THE IMGS ARE FOUND PRINT THEM
      let profileIndex = 0; 
      data.results.forEach((image) => {
        const profilePic = profilePicData.results[profileIndex % profilePicData.results.length];
        createCard(image, profilePic, imageContainer);
        profileIndex++;
      });

    } catch (error) {
      console.error("Error al obtener imágenes:", error);
    }
};
