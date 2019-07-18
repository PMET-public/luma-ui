import React from 'react'
import { Component, classes } from '../../lib'
import Link, { LinkRoute } from '../../components/Link'
import BubbleCarousel, { BubbleCarouselItemProps } from '../../components/BubbleCarousel'
import Carousel from '../../components/Carousel'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import Banner, { BannerProps } from '../../components/Banner'
import Container from '../../components/Container'

type BannerSection = {
    title?: string
    type: 'banner'
    content: BannerProps
}

type ProductSection = {
    title?: string
    type: 'carousel'
    content: Array<{ link: LinkRoute } & ProductItemProps>
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

                        { section.title && <h2>{section.title}</h2> }

                        { section.type === 'banner' && (
                            <Banner  {...section.content}/>
                        )}

                        { section.type === 'carousel' && (
                            <Carousel className="home__section__carousel">
                                {section.content.map(({ link, ...item }, index) => (
                                    <Carousel.Item className="home__section__carousel__item" 
                                        key={`home__section__carousel__item--${index}`}
                                        as={link ? Link : 'div'}
                                        {...link}
                                    >
                                        <ProductItem className="home__section__carousel__item__product" 
                                            {...item} 
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        )}       
                    </section>
                ))}

                <style jsx global>{`
                    .home__container {
                        display: grid;
                        grid-gap: 2rem;
                    }

                    .home__section__carousel {
                        grid-auto-columns: calc(100% - 4rem);
                        grid-gap: 2.5rem;
                    }

                    @media(--medium-screen) {    
                        .home__stories {
                            display: none;
                        }

                        .home__section__carousel {
                            grid-auto-columns: calc((100% / 2) - 4rem);
                        }

                    }

                    @media(--large-screen) {
                        .home__section__carousel {
                            grid-auto-columns: calc((100% / 3) - 4rem);
                        }
                    }
                  
                `}</style>
            </Container>
        </Home>
    )
}
