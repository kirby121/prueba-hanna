const d = document

export function redirectButton(btn, link) {
    const $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        location.href = link
    })
}