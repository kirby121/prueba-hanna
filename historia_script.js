import { animacionInicioFiguras, animacionInicioBoton } from "./animaciones_historia.js"
import { startStory } from "./botones.js"
import { disableScroll } from "./scroll.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    animacionInicioFiguras(".figures", "start-animation-off")
    animacionInicioBoton(".start-btn", "start-btn-animation-off")
    startStory("#start", ".figures figure", "hidden", ".start-btn", "start-btn-animation-off")
    disableScroll()
})