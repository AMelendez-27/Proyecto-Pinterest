import "./card.css";

//FUNCTION TO CREATE CARD POR THE IMGS
export const createCard = (image, profilePic, container) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-card';
  
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;
    imgElement.className = 'requested-img';
  
    const profileDiv = document.createElement('div');
    profileDiv.className = 'profile-pic-container';
  
    const profileImg = document.createElement('img');
    profileImg.className = 'profile-pic';
    profileImg.src = profilePic.urls.small;
    profileImg.alt = profilePic.alt_description;
  
  
    const profileName = document.createElement('p');
    profileName.textContent = "Natalia Sanchez"; //EXAMPLE NAME
  
    const updateDate = document.createElement('p');
    updateDate.textContent = new Date().toLocaleDateString(); //TODAY DATE

    //HOVER CARD
    const hoverCard = document.createElement("div");
    hoverCard.className = "hover-card";

    const hoverButton = document.createElement("button");
    hoverButton.className = "hover-visit-button";
    hoverButton.textContent = "VISITAR";

    

    //WRITE HTML
    imgDiv.appendChild(hoverCard);
    imgDiv.appendChild(hoverButton);

    profileDiv.appendChild(profileImg);
    profileDiv.appendChild(profileName);
    profileDiv.appendChild(updateDate);
  
    imgDiv.appendChild(imgElement);
    imgDiv.appendChild(profileDiv);
  
    container.appendChild(imgDiv);

    
  };