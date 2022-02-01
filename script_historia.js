import { addClassEndVideo, startVideo } from "./funciones_video.js"
import { addClassClick, addClassHover } from "./modificar_clases.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    addClassHover(".option1-border", ".option1","option-border-hover")
    addClassHover(".option2-border", ".option2","option-border-hover")
    addClassHover(".information-question", ".information","visible")
    addClassClick(".start-button", ".start-button", "transparent")
    addClassEndVideo("#video video", "#select-option", "visible")
    addClassEndVideo("#video video", "#video", "none")
    startVideo(".start-button", "#video video")
})