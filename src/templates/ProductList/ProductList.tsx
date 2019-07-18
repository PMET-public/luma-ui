import React, { useState } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Container from '../../components/Container'
import Filters, { FiltersItemProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'

import FiltersIcon from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

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
    const triggerToggleFilters = (state: boolean) => setShowFilter(state)
    const { colors } = useTheme()

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

                        <button className="product-list__grid__search-bar__filters-btn"
                            onClick={() => triggerToggleFilters(!showFilter)}
                        >
                            <FiltersIcon />
                        </button>
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
                .product-list__grid {
                    display: grid;
                    grid-gap: 2rem;
                }

                .product-list__grid__search-bar {
                    justify-self: center;
                    width: 100%;
                    display: grid;
                    grid-auto-flow: column;
                    grid-template-columns: 1fr auto;
                    grid-gap: 1rem;

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
                    color: inherit;
                    cursor: pointer;
                    fill: currentColor;
                    width: 2.4rem;

                    @media(--medium-screen) {
                        display: none;
                    }
                }        

                .product-list__wrapper {
                    display: grid;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content 1fr;

                    @media(--small-screen-only) {
                        grid-auto-columns: 1fr;

                        & .product-list__filters {
                            -webkit-overflow-scrolling: touch;   

                            position: fixed;
                            background-color: ${colors.surface.fade(0.03)};
                            color: ${colors.onSurface};
                            padding: 0;
                            z-index: 4;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            overflow: scroll;
                            transition: transform 305ms ease-out;
                            transform: translateX(-100%);
                            width:  calc(100vw - 0rem);

                            & .filters {
                                padding: 2rem;
                            }
                        }

                        & .product-list__filters__buttons {
                            display: grid;
                            grid-auto-flow: column;
                            grid-gap: 2rem;
                            position: sticky;
                            bottom: 0;
                            padding: 3rem 2rem;
                            box-shadow: 0.1rem 0 1rem rgba(0, 0, 0, 0.15);
                            background-color: ${colors.surface.fade(0.1)};
                            color: ${colors.onSurface};
                        }

                        &.--show-filters {
                            & .product-list__filters {
                                transform: translateX(0);
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
