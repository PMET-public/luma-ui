export const getBackgroundImages = (string: string) => {
    const raw = JSON.parse(string.replace(/\\"/g, '"'))
    const desktop = raw.desktop_image || null
    const mobile = raw.mobile_image || null

    return desktop === null && mobile === null ? null : { desktop, mobile }
}
