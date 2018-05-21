const contentDiv = document.getElementById("content")

const render = (elements) => {
  for (let i in elements) {
    contentDiv.append(elements[i])
  }
}

export default render