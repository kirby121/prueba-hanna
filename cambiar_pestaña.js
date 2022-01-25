const d = document

export function cambiarPestaña(selector, nav1, nav2) {
    
    const $selectors = d.querySelectorAll(selector),
    $nav1 = d.querySelector(nav1),
    $nav2 = d.querySelector(nav2),

    $sqr1 = d.querySelector(".square1"),
    $sqr2 = d.querySelector(".square2"),
    $sqr3 = d.querySelector(".square3"),
    $sqr4 = d.querySelector(".square4")

    $selectors[0].addEventListener("click", e => {

        if(!$selectors[0].classList.contains("underline")){
            $selectors[1].classList.remove("underline")
            $selectors[0].classList.add("underline")

            $nav1.classList.remove("none")
            $nav2.classList.add("none")

            // Animaciones

            $sqr1.classList.remove("square1-variation")

            $sqr2.classList.remove("square2-variation")

            $sqr3.classList.remove("square3-variation")

            $sqr4.classList.remove("square4-variation")
        }
    })
    
    $selectors[1].addEventListener("click", e => {
        if(!$selectors[1].classList.contains("underline")){
            $selectors[1].classList.add("underline")
            $selectors[0].classList.remove("underline")

            $nav1.classList.add("none")
            $nav2.classList.remove("none")

            // Animaciones

            $sqr1.classList.add("square1-variation")

            $sqr2.classList.add("square2-variation")

            $sqr3.classList.add("square3-variation")

            $sqr4.classList.add("square4-variation")
        }
    })
}