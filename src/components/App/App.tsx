import React, { Fragment, FunctionComponent } from 'react'
import { FlashMessage, FlashMessageProps } from 'src/components/FlashMessage'

export type AppProps = {
    flashMessage?: FlashMessageProps
}

export const App: FunctionComponent<AppProps> = ({ flashMessage, children }) => (
    <Fragment>
        { flashMessage && <FlashMessage type={flashMessage.type} message={flashMessage.message} /> }

        <main>
            {children}

            <style>{`
                :root {
                    --color-primary: blue;
                    --color-primary--contrast: white;
                    --color-error: red;
                    --color-error--contrast: white;
                    --color-warning: yellow;
                    --color-warning--contrast: black;
                }
                html {
                    font-size: 10px;
                    font-height: 1
                }

                body {
                    font-size: 1.6rem;
                }
            `}</style>
        </main>
    </Fragment>
)