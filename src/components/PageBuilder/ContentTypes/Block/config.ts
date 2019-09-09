export default (elem: HTMLElement) => {
    return {
        source: elem.children[0].innerHTML,
    }
}
