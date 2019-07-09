import React from 'react'
import { Component, classes } from '../../lib'
import Link, { LinkRoute } from '../../components/Link'
import BubbleCarousel from '../../components/BubbleCarousel'
import Carousel from '../../components/Carousel'
import Image from '../../components/Image'

export type HomeProps = {
    stories?: {
        label: string
        items: Array<{
            image: string
            label: string
            link: LinkRoute
        }>
    }

    categories?: {
        label: string
        items: Array<{
            image: string
            label: string
            link: LinkRoute
        }>
    }
}

export const Home: Component<HomeProps> = ({ 
    as: Home = 'div', 
    stories,
    categories,
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

            { categories && (
                <Carousel className="home_carousel" 
                    label={categories.label} 
                    padding={10}
                >
                    {categories.items.map((category, index) => (
                        <Carousel.Item className="home_carousel__item" 
                            key={`category--${index}`}
                            as={Link}
                            {...category.link}
                        >
                            <Image className="home_carousel__item__image"
                                alt={category.label}
                                src={category.image}
                            >
                                {category.label}
                            </Image>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}

            <style jsx global>{`
                .home_carousel__item__image {
                    width: 100%;
                    max-height: 70rem;
                    color: #fff;
                }

                @media(--medium-screen) {
                    .home__stories {
                        display: none;
                    }
                }
            `}</style>
        </Home>
    )
}
