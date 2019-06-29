import React from 'react'

export default ({ colors }: any) => {

    return (
        <style jsx global>{`
            body {
                background: ${colors.background};
                color: ${colors.onBackground};
            }    

            a {
                color: ${colors.link};
            }

            a:hover {
                color: ${colors.linkHover};
            }
        `}</style>
    )
}
