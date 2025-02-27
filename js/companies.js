const globalTrack = document.querySelectorAll(".companies__items-track")
const trackOne = document.getElementById("track-one")

function getChildrenSumWidth({element, columnGap}) {
    let i = 0
    for (const child of element.children) {
        i += child.scrollWidth + columnGap
    }
    startAnimation(element,i / 2)
}

function startAnimation(element, value) {
    element.style.setProperty('--x', `-${value}px`)
}

function changeGap() {
    for (const child of globalTrack) {
        child.style.columnGap = `${columnGapValue}px`
    }
}

let columnGapValue = 0

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    columnGapValue = 35
    changeGap()
} else {
    columnGapValue = 35
    changeGap()
}

window.addEventListener("resize", () => {
    setTimeout(getChildrenSumWidth, 100, {element: trackOne, columnGap: columnGapValue})
})

setTimeout(getChildrenSumWidth, 100, {element: trackOne, columnGap: columnGapValue})