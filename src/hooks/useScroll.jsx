export const ScrollTo = (e) => {
    document.getElementById(e)?.scrollIntoView({ behavior: "smooth" })
}