import styled, { createGlobalStyle } from 'styled-components'

export const Story = styled.div`
    max-width: 100%;
`

export const StoryGlobalStyles = createGlobalStyle<{ centered?: boolean }>`
    ${props =>
        props.centered &&
        `
            body {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}
`

// export const StoryContainer = styled<{ centered?: boolean }>`
//     height: 100vh;
//     width: 100%;

//     ${props =>
//         props.centered &&
//         `#root {
//             position: relative;
//             top: 50vh;
//             left: 50vw;
//             transform: translate(-50%, -50%);
//         }`}
// `
