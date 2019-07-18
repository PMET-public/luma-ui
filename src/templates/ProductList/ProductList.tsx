import React, { useState } from 'react'
import { Component, classes } from '../../lib'

import { useTheme } from '../../theme'
import { useResize } from '../../hooks/useResize'

import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Container from '../../components/Container'
import Filters, { FiltersItemProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'
import Icon from '../../components/Icon'

import FiltersIcon from '@fortawesome/fontawesome-free/svgs/solid/ellipsis-v.svg'

export type ProductListProps = {
    search: SearchBarProps
    filters: {
        buttons?: {
            apply?: ButtonProps
            reset?: ButtonProps
        },
        items: FiltersItemProps[]
    }
    products: ProductItemProps[]
}

export const ProductList: Component<ProductListProps> = ({ 
    as: ProductList = 'div', 
    search,
    filters,
    products,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(false)
    const { colors } = useTheme()
    const { vHeight, vWidth } = useResize()

    return (
        <ProductList {...props} className={classes('product-list', props.className)}>
            <Container className={classes('product-list__wrapper', ['--show-filters', showFilter])}>
                <div className="product-list__filters">
                    <Filters>
                        {filters.items.map((item, index) => (
                            <Filters.Item key={index} {...item} />
                        ))}
                    </Filters>

                    {filters.buttons && (
                        <div className="product-list__filters__buttons">   
                            <Button 
                                fill 
                                onClick={() => setShowFilter(false)}
                                {...filters.buttons.apply} 
                            />
                        </div>
                    )}
                </div>

                <div className="product-list__grid">
                    <div className="product-list__grid__search-bar">
                        <SearchBar {...search} />

                        <Icon className="product-list__grid__search-bar__filters-btn"
                            as="button"
                            arial-label="Filters"
                            onClick={() => setShowFilter(!showFilter)}
                        >
                            <FiltersIcon />
                        </Icon>

                    </div>

                    <GridList className="product-list__grid__results">
                        {products && products.map((product, index) => (
                            <GridList.Item key={`product-list__results__grid__item--${index}`}>
                                <ProductItem className="product-list__results__grid__item" 
                                    {...product}
                                />
                            </GridList.Item>
                        ))}
                    </GridList>
                </div>
            </Container>

            <style jsx global>{`
                @media(--small-screen-only) {
                    .product-list__wrapper .product-list__filters  { 
                        width: calc(${vWidth}px - 6rem);
                        height: calc(${vHeight}px - 0rem);
                    }
                }
            `}</style>
            
            <style jsx global>{`
                .product-list__grid {
                    display: grid;
                    grid-gap: 2rem;
                }

                .product-list__grid__search-bar {
                    display: grid;
                    grid-auto-flow: column;
                    grid-gap: 1rem;
                    grid-template-columns: 1fr auto;
                    justify-self: center;
                    width: 100%;

                    & .search-bar {
                        background-color: transparent;
                        border-bottom: 0.1rem solid;
                        border-radius: 0;
                        justify-self: center;
                        width: 100%;
                    
                        
                        @media(--medium-screen) {
                            font-size: 2rem;
                        }
                    }

                    @media(--medium-screen) {
                        margin: 2rem 0;
                    }
                }

                .product-list__grid__search-bar__filters-btn {
                    display: inline-flex;
                    font-size: 2.4rem;
                    justify-content: center;
                    width: 2.4rem;
                    
                    @media(--medium-screen) {
                        display: none;
                    }
                }        

                .product-list__wrapper {
                    display: grid;
                    grid-auto-columns: max-content 1fr;
                    grid-auto-flow: column;

                    @media(--small-screen-only) {
                        grid-auto-columns: 1fr;

                        & .product-list__filters {
                            -webkit-overflow-scrolling: touch;   
                            
                            background-color: ${colors.surface};
                            color: ${colors.onSurface};
                            left: 0;
                            overflow: scroll;
                            position: fixed;
                            top: 0;
                            transform: translateX(-100%);
                            transition: transform 305ms ease-out;
                            z-index: 4;
                            
                            & .filters {
                                padding: 4rem;
                            }
                        }

                        & .product-list__filters__buttons {
                            background-color: ${colors.surface};
                            bottom: 0;
                            border-top: 0.1rem solid rgba(0, 0, 0, 0.15);
                            color: ${colors.onSurface};
                            display: grid;
                            grid-auto-flow: column;
                            grid-gap: 2rem;
                            padding: 2rem;
                            position: sticky;

                            @supports(padding: max(0px)) {
                                padding-bottom: max(2rem, env(safe-area-inset-bottom));
                            }
                        }

                        &.--show-filters {
                            & .product-list__filters {
                                transform: translateX(0);
                                box-shadow: 3rem 0 6rem rgba(0, 0, 0, 0.75);
                            }
                        }
                    }

                    @media(--medium-screen) {
                        & .product-list__filters {
                            padding: 16rem 4rem 4rem; 
                        }

                        & .product-list__filters__buttons {
                            display: none;
                        }
                    }
                    
                }

            `}</style>
        </ProductList>
    )
}
