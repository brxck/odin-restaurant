import render from "./render"
import tabs from "./tabs"
import { header, footer, about, menu, contact } from "./content"

const tabList = [
                  {title: "About", content: about()}, 
                  {title: "Menu", content: menu()},
                  {title: "Contact", content: contact()}
                ]

const elements = [header(), tabs(tabList), footer()]

render(elements)