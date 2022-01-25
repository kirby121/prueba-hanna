import { cambiarPestaña } from "./cambiar_pestaña.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    cambiarPestaña("nav p", "#content", "#other-content")
})