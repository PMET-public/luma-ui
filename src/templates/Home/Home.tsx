import React from 'react'
import { Component, classes } from '../../lib'
import Link, { LinkRoute } from '../../components/Link'
import BubbleCarousel, { BubbleCarouselItemProps } from '../../components/BubbleCarousel'
import Banner, { BannerProps } from '../../components/Banner'
import Container from '../../components/Container'
import ProductsCarousel, { ProductsCarouselProps } from '../../components/ProductsCarousel'

type BannerSection = {
    title?: string
    type: 'banner'
    content: BannerProps
}

type ProductSection = {
    title?: string
    type: 'carousel'
    content: ProductsCarouselProps
}

export type HomeProps = {
    stories?: {
        label: string
        items: Array<{
            link: LinkRoute
        } & BubbleCarouselItemProps>
    }

    sections: Array<ProductSection | BannerSection>
}

export const Home: Component<HomeProps> = ({ 
    as: Home = 'div', 
    stories,
    sections,
    ...props
}) => {
    
    return (
        <Home {...props} className={classes('home', props.className)}>
            { stories && (
                <BubbleCarousel className="home__stories" label={stories.label}>
                    {stories.items.map(({ link, ...item }, index) => (
                        <BubbleCarousel.Item className="home__stories__item"
                            key={`story--${index}`}
                            as={Link}
                            {...link}
                            {...item}
                        />
                    ))}
                </BubbleCarousel>
            )}

            <Container className="home__container">
                {sections.map((section, index) => (
                    <section className="home__section" 
                        key={`home__section__${index}`}
                    >
                        { section.type === 'banner' && (
                            <Banner  {...section.content}/>
                        )}

                        { section.type === 'carousel' && (
                            <ProductsCarousel {...section.content} />
                        )}       
                    </section>
                ))}

                <style jsx global>{`
                    .home {
                        display: grid;
                        grid-auto-columns: minmax(0, 1fr);
                        grid-gap: 4rem;
                    }

                    .home__section {
                        display: grid;
                        grid-gap: 2rem;
                    }

                    .home__container {
                        display: inherit;
                        grid-auto-columns: inherit;
                        grid-gap: inherit;
                    }
                    
                    @media(--medium-screen) {    
                        .home__stories {
                            display: none;
                        }
                    }          
                `}</style>
            </Container>
        </Home>
    )
}
