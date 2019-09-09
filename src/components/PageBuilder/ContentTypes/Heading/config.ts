export default (elem: HTMLElement) => {
    return {
        as: elem.nodeName.toLowerCase(),
        text: elem.textContent,
    }
}
