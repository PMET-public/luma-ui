export default (elem: HTMLElement) => {
    return {
        url: elem.getElementsByTagName('iframe')[0].getAttribute('src'),
    }
}
