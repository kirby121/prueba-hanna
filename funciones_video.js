const d = document

export function startVideo(button, video) {

    const $button = d.querySelector(button),
    $video = d.querySelector(video)

    $button.addEventListener("click", e => {
        setTimeout(() => {
            $video.play()
        }, 1000);
    })
    
}

export function addClassEndVideo(video, element, newClass) {
    const $video = d.querySelector(video),
    $element = d.querySelector(element)

    $video.addEventListener("ended", e => {
        $element.classList.add(newClass)
    })
}