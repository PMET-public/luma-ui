import { FlashMessage } from 'src/components/FlashMessage';
import React, { Fragment } from 'react';
export const App = ({ flashMessage, children }) => (React.createElement(Fragment, null,
    flashMessage && React.createElement(FlashMessage, { type: flashMessage.type, message: flashMessage.message }),
    React.createElement("main", null,
        children,
        React.createElement("style", null, `
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
            `))));
//# sourceMappingURL=App.js.map