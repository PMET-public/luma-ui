export default (elem: HTMLElement) => {
    return {
        __html: elem.innerHTML,
    }
}
