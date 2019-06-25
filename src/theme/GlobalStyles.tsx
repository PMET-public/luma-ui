import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default () => { 
    const { colors } = useTheme()

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
