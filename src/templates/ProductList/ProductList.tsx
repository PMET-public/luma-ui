import React, { useState, useRef } from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useTheme } from '../../theme'
import { useResize } from '../../hooks/useResize'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import Assembler, { AssemblerProps } from '../../components/Assembler'
import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import Filters, { FiltersProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'

// import FiltersIcon from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

export type ProductListProps = Props<{
    title: Props,
    assembler?: AssemblerProps
    filters: {
        label: string
        open?: boolean
        buttons?: ButtonProps[],
        props: FiltersProps
    }
    products?: ProductItemProps[]
}>

export const ProductList: Component<ProductListProps> = ({
    assembler,
    title,
    filters,
    products,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!filters.open)
    const { colors } = useTheme()
    const { vHeight } = useResize()
    const filtersRef = useRef(null)

    useOnClickOutside(filtersRef, () => setShowFilter(false))

    return (
        <Element {...props} className={classes('product-list', props.className)}>
            <div className={classes('product-list__wrapper', ['--show-filters', showFilter])}>
                {/* <div className="product-list__top-bar">
                    <Element 
                        {...title} 
                        className={classes('product-list__tob-bar__title', title.className)} 
                    />

                    <button className="product-list__tob-bar__button"
                        onClick={() => setShowFilter(!showFilter)}
                    >  
                        <span>
                            <FiltersIcon className="product-list__tob-bar__button__icon" /> 
                            {filters.label}
                        </span>
                    </button>
                </div> */}
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

                <div className="product-list__content"> 
                    {assembler && (
                        <Assembler 
                            {...assembler} 
                            className={classes('product-list__content__assembler', assembler.className)} 
                        />
                    )}
                    
                    {products && (
                        <GridList className="product-list__content__results">
                            {products && products.map((product, index) => (
                                <GridList.Item key={index}>
                                    <ProductItem className="product-list__results__grid__item" 
                                        {...product}
                                    />
                                </GridList.Item>
                            ))}
                        </GridList>
                    )}
                </div>
            </div>

            <style jsx global>{`
                @media(--small-screen-only) {
                    .product-list__filters  { 
                        width: calc(100vw - 6rem);
                        height: calc(${vHeight} - 0rem);
                    }
                }
            `}</style>
            
            <style jsx global>{`
                .product-list__content {
                    display: grid;
                    grid-auto-columns: minmax(0, 1fr);
                    grid-gap: 3rem;
                }    

                .product-list__top-bar {
                    align-items: center;
                    background-color: ${colors.surface.fade(0.05)};
                    color: ${colors.onSurface};
                    display: grid;
                    grid-template-columns: 1fr auto;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                    min-height: 6rem;
                }

                .product-list__tob-bar__title {
                    font-size: 2rem;
                }

                .product-list__tob-bar__button > span {
                    display: grid;
                    fill: currentColor;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 0.75rem;
                    align-items: center;
                    font-size: 1.4rem;
                }

                .product-list__tob-bar__button__icon {
                    width: 1em;
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
                            padding: 6rem 2rem 0; 
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
