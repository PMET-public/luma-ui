import React from 'react'
import { Component, classes } from '../../lib'
import Link, { LinkRoute } from '../../components/Link'
import BubbleCarousel from '../../components/BubbleCarousel'
import Carousel from '../../components/Carousel'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
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

    productsCarousels?: Array<{
        title: string
        items: Array<{
            link: LinkRoute
        } & ProductItemProps>
    }>
}

export const Home: Component<HomeProps> = ({ 
    as: Home = 'div', 
    stories,
    productsCarousels,
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

            <Image className="home__banner"
                alt="" 
                src={require('../../../public/images/banner-1.jpg')}
                mobile={require('../../../public/images/banner-1--mobile.jpg')}
            >
                <div className="">
                    <h2>A sense of renewal</h2>
                    <p>
                        Enjoy comfort of body and mind with Luma eco-friendly choices
                    </p>
                </div>
            </Image>

            <Image className="home__banner"
                alt="" 
                src={require('../../../public/images/banner-2.jpg')}
                mobile={require('../../../public/images/banner-2--mobile.jpg')}
                >
                <h2>Twice around, twice as nice</h2>
                <p>
                    Find conscientious, comfy clothing in our eco-friendly collection
                </p>
            </Image>

            { productsCarousels && productsCarousels.map((carousel, index) => (
                <section className="home__section" key={`home__products-carousel__${index}`}>
                    <h2>{carousel.title}</h2>

                    <Carousel className="home__products-carousel" 
                        padding={2}
                    >
                        {carousel.items.map(({link, ...product}, index) => (
                            <Carousel.Item className="home__products-carousel__item" 
                                key={`home__products-carousel__item--${index}`}
                                as={Link}
                                {...link}
                            >
                                <ProductItem className="home__products-carousel__item__product" 
                                    {...product} 
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            ))}

            <style jsx global>{`
                .home__products-carousel {
                    grid-auto-columns: calc(100% - 4rem);
                    grid-gap: 1rem;
                }

                @media(--medium-screen) {    
                    .home__stories {
                        display: none;
                    }

                    .home__products-carousel {
                        grid-auto-columns: calc((100% / 2) - 4rem);
                    }

                }

                @media(--large-screen) {
                    .home__products-carousel {
                        grid-auto-columns: calc((100% / 3) - 4rem);
                    }
                }

                @media(--xlarge-screen) {
                    .home__products-carousel {
                        grid-auto-columns: calc((100% / 4) - 4rem);
                    }
                }
            `}</style>
        </Home>
    )
}
