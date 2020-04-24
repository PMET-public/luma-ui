import { createGlobalStyle } from 'styled-components'

export const EffectsStyles = createGlobalStyle`
    /* Blur */
    .lazy-load-image-background.blur {
        filter: blur(5px);
    }

    .lazy-load-image-background.blur.lazy-load-image-loaded {
        filter: blur(0);
        transition: filter 0.3s;
    }

    .lazy-load-image-background.blur > img {
        opacity: 0;
    }

    .lazy-load-image-background.blur.lazy-load-image-loaded > img {
        opacity: 1;
        transition: opacity 0.3s;
    }

    /* Black and White */
    .lazy-load-image-background.black-and-white {
        filter: grayscale(1);
    }

    .lazy-load-image-background.black-and-white.lazy-load-image-loaded {
        filter: grayscale(0);
        transition: filter 0.3s;
    }

    .lazy-load-image-background.black-and-white > img {
        opacity: 0;
    }

    .lazy-load-image-background.black-and-white.lazy-load-image-loaded > img {
        opacity: 1;
        transition: opacity 0.3s;
    }

    /* Opacity */
    .lazy-load-image-background.opacity {
        background-image: none !important;
        opacity: 0;
    }

    .lazy-load-image-background.opacity.lazy-load-image-loaded {
        opacity: 1;
        transition: opacity 0.3s;
    }
`
