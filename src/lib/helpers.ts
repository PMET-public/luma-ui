
export const throttle = (func: any, limit: number) => {
    let inThrottle: boolean
    return function context() {
        const args = arguments
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}
