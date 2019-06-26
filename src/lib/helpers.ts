
// export const throttle = (func: any, limit: number) => {
//     let inThrottle: boolean
//     return function context() {
//         const args = arguments
//         if (!inThrottle) {
//             func.apply(context, args)
//             inThrottle = true
//             setTimeout(() => inThrottle = false, limit)
//         }
//     }
// }

export const throttle = (fn: any, delay = 100, trail?: boolean) => {
    const offset: any = (trail === false) ? 0 : delay
    let last = 0
    let timeout: any

    return function context() {
        // we subtract the delay to prevent double executions
        const now = +new Date
        const elapsed = (now - last - offset)
        const args = arguments

        function exec() {
            // remove any existing delayed execution
            if (timeout) timeout = clearTimeout(timeout)
            fn.apply(context, args)
            last = now
        }

        // execute the function now
        if (elapsed > delay) exec()
        // add delayed execution (this could execute a few ms later than the delay)
        else if (!timeout && trail !== false) timeout = setTimeout(exec, delay)
    }
}
