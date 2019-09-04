export default (elem: HTMLElement) => {
    console.log(elem)
    return {
        source: elem.innerText,
    }
}
