export const getBackgroundImages = (string: string) => {
    const raw = JSON.parse(string.replace(/\\"/g, '"'))
    const desktop = raw.desktop_image || undefined
    const mobile = raw.mobile_image || undefined

    return desktop === undefined && mobile === undefined ? undefined : { desktop, mobile }
}
