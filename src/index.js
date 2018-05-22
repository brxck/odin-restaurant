import header from "./header"
import render from "./render"
import tabs from "./tabs"

const tabList = [
                  {title: "About"}, 
                  {title: "Menu"},
                  {title: "Contact"}
                ]

const elements = [header(), tabs(tabList)]

render(elements)