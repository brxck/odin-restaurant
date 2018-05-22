const footer = () => {
  const footerElement = document.createElement("div")
  footerElement.className = "footer has-text-centered"
  footerElement.style.cssText = `position: fixed;
                                 width: inherit;
                                 bottom: 0;
                                 overflow:hidden;`

  footerElement.innerHTML = `<p>This is a webpage made using only JavaScript.</p>`
  footerElement.innerHTML += `<p>Check it out on <a href="https://github.com/brxck/odin-restaurant">GitHub.</a></p>`

  return footerElement
}

export default footer