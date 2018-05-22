const header = () => {
  let headerElement = document.createElement("div")
  headerElement.className = "section"

  let titleElement = document.createElement("h1")  
  titleElement.innerHTML = "<em>JS</em>oe's Diner"
  titleElement.className = "title"
  headerElement.appendChild(titleElement)
  
  return headerElement
}

export default header