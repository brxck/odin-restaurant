const header = () => {
  let headerElement = document.createElement("div")
  headerElement.className = "section"

  let titleElement = document.createElement("h1")  
  titleElement.textContent = "odin-restaurant"
  titleElement.className = "title"
  headerElement.appendChild(titleElement)
  
  return headerElement
}

export default header