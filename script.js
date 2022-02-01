import { redirectButton } from "./botones.js"
import { cambiarPestaña } from "./cambiar_pestaña.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    cambiarPestaña("nav p", "#content", "#other-content")
    redirectButton("#content button", "https://kirby121.github.io/prueba-hanna/historia.html")
})
