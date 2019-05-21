import React, { Fragment, FunctionComponent } from 'react'

type BannerProps = {}

export const Banner: FunctionComponent<BannerProps> = ({ }) => (
    <Fragment>
        <div className="banner">
            <div className="banner__content">
                <div className="banner__content__overlay">
                    <h1>Headline</h1>
                    <h2>Subheadline</h2>
                </div>
            </div>
            <button className="banner__cta">Button</button>
        </div>
    </Fragment>
)
