import "./button.css"

export const createMainButton = ({text, idName = "exampleId"}) => {
  return `<button class="main-button id="${idName}">${text}</button>`
}

export const createCustomerButton = ({iconRute, descriptionText, idName}) => {
  return `<button class="customer-button" id="${idName}"><img src="/public/icons/${iconRute}.png" alt="${descriptionText}"></button>`
}
