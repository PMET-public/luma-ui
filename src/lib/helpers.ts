/**
 * Returns a string with BEM classes
 * http://getbem.com/
 * i.e.: class-name class-name--modefier
 */
export const getbem = (className: string, ...attrs: Array<(string | [string, boolean])>): string => {
    const modifiers = attrs
        .filter(m => m.length > 1 ? m[1] : !!m)
        .map(m => `${className}--${typeof m === 'string' ? m : m[0]}`)

    return [className, ...modifiers].join(' ')
}

export const mergeString = (...classes: Array<string | undefined>): string => {
    return classes
        .filter(x => !!x)
        .join(' ')
}
