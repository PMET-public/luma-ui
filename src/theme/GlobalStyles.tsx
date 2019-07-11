import React from 'react'

export default ({ colors }: any) => {

    return (
        <style jsx global>{`
            body {
                background: ${colors.background};
                color: ${colors.onBackground};
            }    

            .theme-container {
                margin: 0 auto;
                max-width: 1800px;
                padding: 0 1rem;
                width: 100%;
            }

            a {
                color: ${colors.link};
            }

            a:hover {
                color: ${colors.linkHover};
            }

            .visuallyhidden { 
                clip: rect(0 0 0 0); 
                height: 1px; width: 1px; 
                margin: -1px; padding: 0; border: 0; 
                overflow: hidden; 
                position: absolute; 
            }
        `}</style>
    )
}
