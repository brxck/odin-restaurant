const tabs = (tabs) => {
  const tabsElement = document.createElement("div")
  const tabsList = document.createElement("ul")
  tabsElement.className = "tabs"
  tabsElement.appendChild(tabsList)

  tabs.forEach(tab => createTab(tab, tabsList))

  return tabsElement
}

const createTab = (tab, tabsList) => {
  let newTab = document.createElement("li")
  newTab.innerHTML = `<a>${tab.title}</a>`
  // on click for content

  tabsList.append(newTab)
}

export default tabs