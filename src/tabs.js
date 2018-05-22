const tabs = (tabs) => {
  const tabsElement = document.createElement("div")
  const tabsList = document.createElement("ul")
  tabsElement.className = "tabs is-centered"
  tabsElement.appendChild(tabsList)

  const fragment = document.createDocumentFragment()
  const tabView = document.createElement("div")
  tabView.className = "container has-text-centered"
  fragment.appendChild(tabsElement)
  fragment.appendChild(tabView)

  tabs.forEach(tab => createTab(tab, tabsList, tabView))

  // Make first tab active by simulating mouseclick
  tabsList.firstChild.dispatchEvent(new Event("click"))

  return fragment
}

const createTab = (tab, tabsList, tabView) => {
  let newTab = document.createElement("li")
  newTab.innerHTML = `<a>${tab.title}</a>`

  // Make tab visible and toggle status on click
  newTab.addEventListener("click", () => {
    tabView.innerHTML = ""
    tabView.append(tab.content)

    Array.from(tabsList.children).forEach(tab => { tab.className = "" })
    newTab.className = "is-active"
  })

  tabsList.append(newTab)
}

export default tabs