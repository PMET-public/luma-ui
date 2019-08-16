import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Pills.css'

export type PillsProps = Props<{
    classes?: typeof styles
    items: Array<Props<{
        _id?: string | number
        count?: string | number
        text: string
    }>>
}>

export const Pills: Component<PillsProps> = ({ 
    classes,
    items,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }
    
    return (
        <Element {...props} className={styles.root}>
            <div className={styles.wrapper}>
                {items.map(({ _id, text, count, ...item }, index) => (
                    <Element 
                        {...item} 
                        className={styles.item}
                        key={_id || index}
                    >
                        <span className={styles.itemWrapper}>
                            { text }
                            {!!count && (
                                <span className={styles.itemCount}>
                                    {count}
                                </span>
                            )}
                        </span>
                    </Element>
                ))}
            </div>
        </Element>
    )
}
