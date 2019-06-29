
import React from 'react'

export default ({ typography }: any) => {
    return (
        <style jsx global>{`
            html {
                -webkit-font-smoothing: antialiased;
                font-family: ${typography.bodyFamily};
                font-size: 62.5%; /* ~10px = 1rem! */
                font-style: ${typography.bodyStyle};
                font-weight: ${typography.bodyWeight};
            }
            
            body {
                font-size: 16px; /* px fallback */
                font-size: 1.6rem; /* default font-size for document */
            }
            
            /* Copy & Lists */
            
            p {
                margin-bottom: 2rem;
                margin-top: 2rem;
            }
            
            ul, ol {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            
            ul {
                list-style-type: circle;
            }
            
            ul li, ol li {
                line-height: 1.5;
            }
            
            blockquote {
                font-size: 2.4rem;
                font-style: italic;
                line-height: 1.5;
                margin-bottom: 1rem;
                margin-top: 1rem;
                padding-left: 2.4rem;
                position: relative;
            }
            
            /* Headings */
            
            h1, h2, h3, h4, h5, h6 {
                /* Change heading typefaces here */
                font-family: ${typography.headingFamily};
                font-style: ${typography.headingStyle};
                font-weight: ${typography.headingWeight};
                line-height: 1.1;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }
            
            h1 {
                font-size: 3.2rem;
            }
            
            h2 {
                font-size: 2.6rem;
            }
            
            h3 {
                font-size: 2.2rem;
            }
            
            h4, h5, h6 {
                font-size: 2rem;
            }
            
            /* Tables */
            
            table {
                margin-top: 1rem;
                border-spacing: 0;
                border-collapse: collapse;
            }
            
            table td, table th {
                padding: 0;
                line-height: 3.3rem;
            }
            
            /* Code blocks */
            
            code {
                font-family: 'Fira Code', 'Courier New', Courier, monospace;
                font-size: 1.4rem;
                line-height: 1.5;
            }
        `}</style>
    )
}
