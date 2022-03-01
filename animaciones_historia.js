const d = document

export function animacionInicioFiguras(figures, newClass) {
    const $figures = d.querySelectorAll(figures)

    setTimeout(() => {
        $figures.forEach(element => element.classList.toggle(newClass));
    }, 500);

}

export function animacionInicioBoton(div, newClass) {
    const $div = d.querySelector(div)

    setTimeout(() => {
        $div.classList.toggle(newClass)
    }, 1200);

}