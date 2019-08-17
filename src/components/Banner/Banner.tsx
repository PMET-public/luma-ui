import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './Banner.css'

import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'

export type BannerProps = Props<{
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
    image,
    position = 'top',
    titles,
    ...props
}) => {

    return (
        <Element className={styles.root} {...props}>

            <Image
                transition
                className={styles.image}
                {...image}
            />

            <div className={classNames(styles.content, styles[position])}>

                {titles && (
                    <div className={styles.titles}>
                        {titles.map(({ large = false, ...title }, index) => (
                            <Element
                                className={classNames(
                                    styles.title,
                                    [styles.large, large]
                                )}
                                key={index}
                                {...title}
                            />
                        ))}
                    </div>
                )}

                {buttons && (
                    <div className={styles.buttons}>
                        {buttons.map((button, index) => (
                            <Button
                                className={styles.button}
                                key={index}
                                {...button}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Element>
    )
}
