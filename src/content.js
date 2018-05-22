const about = () => {
  const aboutElement = document.createElement("div")

  const aboutText = document.createElement("p")
  const aboutText2 = document.createElement("p")
  const aboutText3 = document.createElement("p")  
  aboutText.textContent = "Eat at JSoe's!"
  aboutText2.textContent = "We've been open since forever!"
  aboutText3.textContent = "Our website is only JavaScript!?"  

  aboutElement.appendChild(aboutText)
  aboutElement.appendChild(aboutText2)
  aboutElement.appendChild(aboutText3)

  return aboutElement
}

const menu = () => {
  const menuElement = document.createElement("div")
  menuElement.className = "has-text-centered"

  const cheeseburger = document.createElement("p")
  const fries = document.createElement("p")
  const drink = document.createElement("p")

  cheeseburger.textContent = "Black Bean Burger ... 10.99"
  fries.textContent = "Sweet Potato Fries ... 3.99"
  drink.textContent = "Iced Tea ... 2.99"

  menuElement.appendChild(cheeseburger)
  menuElement.appendChild(fries)  
  menuElement.appendChild(drink)  

  return menuElement
}

const contact = () => {
  const contactElement = document.createElement("div")
  contactElement.className = "field has-addons"

  const textField = document.createElement("input")
  textField.className = "input"
  textField.type = "text"
  textField.placeholder = "Send a message into the void!"
  textField.rows = 3

  const submitButton = document.createElement("button")
  submitButton.className = "button is-info"
  submitButton.textContent = "Send it!"

  contactElement.appendChild(textField)
  contactElement.appendChild(submitButton) 

  return contactElement
}

export { about, menu, contact }