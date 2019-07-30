import React, { useState, useRef } from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useTheme } from '../../theme'
import { useResize } from '../../hooks/useResize'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Filters, { FiltersProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'
import Icon from '../../components/Icon'

import FiltersIcon from '@fortawesome/fontawesome-free/svgs/solid/ellipsis-h.svg'

export type ProductListProps = Props<{
    search: SearchBarProps
    filters: {
        label: string
        open?: boolean
        buttons?: ButtonProps[],
        props: FiltersProps
    }
    products: ProductItemProps[]
}>

export const ProductList: Component<ProductListProps> = ({
    search,
    filters,
    products,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!filters.open)
    const { colors } = useTheme()
    const { vHeight, vWidth } = useResize()
    const filtersRef = useRef(null)

    useOnClickOutside(filtersRef, () => setShowFilter(false))

    return (
        <Element {...props} className={classes('product-list', props.className)}>
            <div className={classes('product-list__wrapper', ['--show-filters', showFilter])}>
                <div className="product-list__filters"
                    ref={filtersRef}
                >
                    <Filters {...filters.props} />
                    
                    {filters.buttons && (
                        <div className="product-list__filters__buttons">  
                            {filters.buttons.map((button, index) => (
                                <Button 
                                    key={index}
                                    {...button} 
                                />
                            ))} 
                        </div>
                    )}
                </div>

                <div className="product-list__grid">
                    <div className="product-list__grid__search-bar">
                        <SearchBar {...search} />

                        <Icon className="product-list__grid__search-bar__filters-btn"
                            as="button"
                            arial-label={filters.label}
                            onClick={() => setShowFilter(!showFilter)}
                        >
                            <FiltersIcon />
                        </Icon>

                    </div>

                    <GridList className="product-list__grid__results">
                        {products && products.map((product, index) => (
                            <GridList.Item key={index}>
                                <ProductItem className="product-list__results__grid__item" 
                                    {...product}
                                />
                            </GridList.Item>
                        ))}
                    </GridList>
                </div>
            </div>

            <style jsx global>{`
                @media(--small-screen-only) {
                    .product-list__filters  { 
                        width: calc(${vWidth}px - 6rem);
                        height: calc(${vHeight}px - 0rem);
                    }
                }
            `}</style>
            
            <style jsx global>{`
                .product-list__grid {
                    display: grid;
                    grid-auto-columns: minmax(0, 1fr);
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
                    grid-template-columns: max-content 1fr;

                    @media(--small-screen-only) {
                        grid-template-columns: 1fr;

                        & .product-list__filters {
                            -webkit-overflow-scrolling: touch;   
                            background-color: ${colors.surface};
                            color: ${colors.onSurface};
                            display: flex;
                            flex-direction: column;
                            left: 0;
                            overflow: scroll;
                            position: fixed;
                            top: 0;
                            transform: translateX(-100%);
                            transition: transform 305ms ease-out;
                            z-index: 4;
                            
                            & .filters {
                                padding: 4rem;
                                flex-grow: 1;
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
        </Element>
    )
}
