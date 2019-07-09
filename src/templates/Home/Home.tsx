import React from 'react'
import { Component, classes } from '../../lib'
import Link, { LinkRoute } from '../../components/Link'
import BubbleCarousel from '../../components/BubbleCarousel'
import Carousel from '../../components/Carousel'
// import Image from '../../components/Image'

export type HomeProps = {
    stories?: {
        label: string
        items: Array<{
            image: string
            label: string
            link: LinkRoute
        }>
    }

    carousels?: Array<{
        label: string
        items: Array<{
            image: string
            label: string
            link: LinkRoute
        }>
    }>
}

export const Home: Component<HomeProps> = ({ 
    as: Home = 'div', 
    stories,
    carousels,
    ...props
}) => {
    
    return (
        <Home {...props} className={classes('home', props.className)}>
            { stories && (
                <BubbleCarousel className="home__stories" label={stories.label}>
                    {stories.items.map((story, index) => (
                        <BubbleCarousel.Item className="home__stories__item"
                            image={story.image}
                            label={story.label}
                            key={`story--${index}`}
                            as={Link}
                            {...story.link}
                        />
                    ))}
                </BubbleCarousel>
            )}

            { carousels && carousels.map((carousel, index) => (
                <section className="home__section" key={`home__carousel__${index}`}>
                    <h2>{carousel.label}</h2>

                    <Carousel className="home_carousel" 
                        padding={10}
                    >
                        {carousel.items.map((carouselItem, index) => (
                            <Carousel.Item className="home__carousel__item" 
                                key={`home__carousel__item--${index}`}
                                as={Link}
                                {...carouselItem.link}
                            >
                                {/* TODO: Product Item */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            ))}

            <style jsx global>{`
                @media(--medium-screen) {
                    .home__stories {
                        display: none;
                    }
                }
            `}</style>
        </Home>
    )
}
