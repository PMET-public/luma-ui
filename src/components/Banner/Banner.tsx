import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Banner.css'

import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'

export type BannerProps = Props<{
    classes: typeof defaultClasses
    image: ImageProps
    titles?: Array<Props<{
        text: string,
        large?: boolean
    }>>
    position?: 'top' | 'bottom'
    buttons?: ButtonProps[]
}>

export const Banner: Component<BannerProps> = ({
    buttons,
    classes,
    image,
    position = 'top',
    titles,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>

            <Image
                {...image}
                transition
                classes={{
                    root: styles.image,
                    image: styles.imageTag,
                }}
            />

            <div className={classNames(styles.content, styles[position])}>

                {titles && (
                    <div className={styles.titles}>
                        {titles.map(({ large = false, ...title }, index) => (
                            <Element 
                                {...title} 
                                className={classNames(
                                    styles.title, 
                                    [styles.large, large]
                                )}
                                key={index}
                            />
                        ))}
                    </div>
                )}

                {buttons && (
                    <div className={styles.buttons}>
                        {buttons.map((button, index) => (
                            <Button 
                                {...button}
                                classes={{
                                    root: styles.button,
                                }}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Element>
    )
}
