import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Pills.css'

export type PillsProps = Props<{
    items: Array<Props<{
        _id?: string | number
        count?: string | number
        text: string
    }>>
}>

export const Pills: Component<PillsProps> = ({ 
    items,
    ...props
}) => {
    
    return (
        <Element className={styles.root} {...props}>
            <div className={styles.wrapper}>
                {items.map(({ _id, text, count, ...item }, index) => (
                    <Element 
                        className={styles.item}
                        key={_id || index}
                        {...item} 
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
