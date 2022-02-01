const d = document

export function addClassHover(element, hoverElement, newClass) {
    const $element = d.querySelector(element),
    $hoverElement = d.querySelector(hoverElement)

    $hoverElement.addEventListener("mouseover", e => {
        $element.classList.add(newClass)
    })

    $hoverElement.addEventListener("mouseout", e => {
        $element.classList.remove(newClass)
    })
}

export function addClassClick(element, clickElement, newClass) {
    const $element = d.querySelector(element),
    $clickElement = d.querySelector(clickElement)

    $clickElement.addEventListener("click", e => {
        $element.classList.add(newClass)
    })
}