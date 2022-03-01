const d = document

export function redirectButton(btn, link, darkScreen) {
    const $btn = d.querySelector(btn),
    $darkScreen = d.querySelector(darkScreen)

    
    $btn.addEventListener("click", e => {

        $darkScreen.classList.add("active")

        /*setTimeout(() => {
            location.href = link
        }, 1000);*/
    })
}

/*Historia*/

export function startStory(btn, figures, figuresClass, panel, panelClass) {
    const $btn = d.querySelector(btn),
    $figures = d.querySelectorAll(figures),
    $panel = d.querySelector(panel)

    $btn.addEventListener("click", e => {

        $figures.forEach(element => element.classList.toggle(figuresClass));
        $panel.classList.add(panelClass)
    })
}