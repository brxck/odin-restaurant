import header from "./header"
import render from "./render"
import tabs from "./tabs"

const tabList = [
                  {title: "About", content: "about"}, 
                  {title: "Menu", content: "menu"},
                  {title: "Contact", content: "contact"}
                ]

const elements = [header(), tabs(tabList)]

render(elements)