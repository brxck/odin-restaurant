const tabs = (tabs) => {
  const tabsElement = document.createElement("div")
  const tabsList = document.createElement("ul")
  tabsElement.className = "tabs"
  tabsElement.appendChild(tabsList)

  const fragment = document.createDocumentFragment()
  const tabView = document.createElement("div")
  fragment.appendChild(tabsElement)
  fragment.appendChild(tabView)

  tabs.forEach(tab => createTab(tab, tabsList, tabView))

  return fragment
}

const createTab = (tab, tabsList, tabView) => {
  let newTab = document.createElement("li")
  newTab.innerHTML = `<a>${tab.title}</a>`
  newTab.addEventListener("click", () => {
    tabView.innerHTML = ""
    tabView.append(tab.content)
  })

  tabsList.append(newTab)
}

export default tabs