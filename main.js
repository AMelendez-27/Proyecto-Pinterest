import "./style.css";
import { createMainButton, createCustomerButton } from "./src/components/button/button";
import { DefaultPrint, printFirstRequestedImgs, printImgs } from "./src/components/printImgs/printImgs";

// HEADER 
//EXPLORE BUTTONS (LEFT SIDE BUTTONS)
const homeButton = document.querySelector("#home");
const exploreButton = document.querySelector("#explore");
const createButton = document.querySelector("#create");

homeButton.innerHTML = `${createMainButton({text : "Inicio", idName : "home-button"})}`;
exploreButton.innerHTML = `${createMainButton({text : "Explorar", idName : "explore-button"})}`;
createButton.innerHTML = `${createMainButton({text : "Crear", idName : "create-button"})}`;

//PROFILE BUTTONS (RIGHT SIDE BUTTONS)
const notificationsButton = document.querySelector("#notifications");
const mesagesButton = document.querySelector("#messages");
const profileButton = document.querySelector("#profile");

notificationsButton.innerHTML = `${createCustomerButton({iconRute : "notifications", descriptionText : "Boton de acceso a las notificaciones", idName : "notifications-button"})}`;
mesagesButton.innerHTML = `${createCustomerButton({iconRute : "messages", descriptionText : "Boton de acceso a los mensajes", idName : "messages-button"})}`;
profileButton.innerHTML = `${createCustomerButton({iconRute : "profile", descriptionText : "Boton de acceso al perfil", idName : "profile-button"})}`;

//BODY
// DEFAULT PRINT EXAMPLE
DefaultPrint('muscle car');

//PRINT RECUESTED IMGS
printImgs();

//PRINT DEFAULT BY CLICKING ON THE LOGO
document.getElementById("logo").addEventListener("click", () => {
  DefaultPrint('muscle car');
});
