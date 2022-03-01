export function disableScroll(){  
    const x = window.scrollX,
    y = window.scrollY
    window.onscroll = function(){ window.scrollTo(x, y) };
}