import React, { Fragment, FunctionComponent } from 'react'

type BannerProps = { }

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

        <style jsx>{`
            .banner-wrapper {
                background-position: left top;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: scroll;
                border-style: none;
                border-width: 1px;
                border-radius: 0px;
                padding: 40px;
                min-height: 600px;
                text-align: center;
            }
            .content {
                
            }
            .overlay {
                background-color: rgb(255, 255, 255);
            }
            .banner-button {
                opacity: 1;
                visibility: visible;
            }
        `}</style>
    </Fragment>
)