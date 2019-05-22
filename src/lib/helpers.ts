/**
 * Returns a string with all classes
 * i.e.: class-name
 */
export const getClassNamesWithModifier = (className: string, ...attrs: Array<(string | [string, boolean])>) => {
    const modifiers = attrs
        .filter(m => m.length > 1 ? m[1] : !!m)
        .map(m => `${className}--${typeof m === 'string' ? m : m[0]}`)

    return [className, ...modifiers].join(' ')
}
