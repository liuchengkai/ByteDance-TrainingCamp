import foo from './foo'
import "./style.css"
import data from "./data.json5"
foo()
console.log(data.content)
const button = document.createElement("button")
button.innerHTML = "test"
button.classList.add("button")
button.onclick = async () => {
    const bar = await import("./bar.js")
    console.log(bar.bar())
}
const app = document.getElementById("app")
app.append(button)