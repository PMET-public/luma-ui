import React, { Fragment, FunctionComponent } from 'react'

type BannerProps = {}

export const Banner: FunctionComponent<BannerProps> = ({ }) => (
    <Fragment>
        <div className="banner-wrapper">
            <div className="content">
                <div className="overlay">
                    <h1>Headline</h1>
                    <h2>Subheadline</h2>
                </div>
            </div>
            <button>Button</button>
        </div>
    </Fragment>
)
