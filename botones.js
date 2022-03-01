const d = document

export function redirectButton(btn, link, darkScreen) {
    const $btn = d.querySelector(btn),
    $darkScreen = d.querySelector(darkScreen)

    
    $btn.addEventListener("click", e => {
        $darkScreen.classList.remove("inactive")
        $darkScreen.classList.add("active")
        setTimeout(() => {
            location.href = link
        }, 1000);
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

export function startVideos(video, videoClass, btn, source) {
    const $video = d.querySelector(video),
    $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        $video.classList.add(videoClass)
        $video.setAttribute("src", source)
        setTimeout(() => {
            $video.play()
        }, 1000);
    })
}