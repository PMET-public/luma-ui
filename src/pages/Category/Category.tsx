import React, { useState, useRef } from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useTheme } from '../../theme'
import { useResize } from '../../hooks/useResize'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import Assembler, { AssemblerProps } from '../../components/Assembler'
import ProductList, { ProductListProps } from '../../components/ProductList'
import Filters, { FiltersProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import Pills, { PillsProps } from '../../components/Pills'

import FiltersIcon from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

export type CategoryProps = Props<{
    title: Props,
    breadcrumbs?: BreadcrumbsProps
    categories?: PillsProps
    assembler?: AssemblerProps
    filters?: {
        label: string
        open?: boolean
        closeButton: ButtonProps,
        props: FiltersProps
    }
    products?: ProductListProps
}>

export const Category: Component<CategoryProps> = ({
    assembler,
    breadcrumbs,
    categories,
    title,
    filters,
    products,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!(filters && filters.open))
    const { colors } = useTheme()
    const { vHeight } = useResize()
    const filtersRef = useRef(null)

    useOnClickOutside(filtersRef, () => setShowFilter(false))

    return (
        <Element {...props} className={classes('category', props.className)}>
            <div className="category__top-bar">
                <div className="category__top-bar__heading">
                    {breadcrumbs && (
                        <Breadcrumbs
                            prefix="#"
                            {...breadcrumbs}
                            className={classes('category__top-bar__heading__breadcrumbs', breadcrumbs.className)}
                        />
                    )}

                    <Element
                        {...title}
                        className={classes('category__top-bar__heading__title', title.className)}
                    />
                </div>

                {filters && (
                    <button className="category__top-bar__filter-button"
                        type="button"
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        <span>
                            <FiltersIcon className="category__top-bar__filter-button__icon" />
                            {filters.label}
                        </span>
                    </button>
                )}
            </div>

            {categories && (
                <Pills 
                    {...categories} 
                    className={classes('category__categories', categories.className)} 
                />
            )}

            <div className="category__content">
                {assembler && (
                    <Assembler
                        {...assembler}
                        className={classes('category__content__assembler', assembler.className)}
                    />
                )}

                {products && (
                    <ProductList {...products} />
                )}
            </div>
            
            {filters && (
                <div className={classes('category__filters', ['--active', showFilter])}
                    ref={filtersRef}
                >
                    <Filters {...filters.props} />

                    {filters.closeButton && (
                        <div className="category__filters__buttons">
                            <Button
                                fill
                                onClick={() => setShowFilter(false)}
                                {...filters.closeButton}
                            />
                        </div>
                    )}
                </div> 
            )}

            <style jsx global>{`
                .category__filters  { 
                    height: ${vHeight};
                }
            `}</style>

            <style jsx global>{`
                .category {
                    display: grid;
                    grid-gap: 2rem;
                }

                .category__top-bar {
                    align-items: center;
                    background-color: ${colors.surface75};
                    backdrop-filter: blur(50px);
                    padding: 0 2rem;
                    color: ${colors.onSurface};
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr auto;
                    min-height: 5rem;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }

                .category__top-bar__heading {
                    align-items: center;
                    display: grid;
                    grid-auto-flow: row;
                    grid-auto-rows: max-content;
                    grid-gap: 0.5rem;
                    
                    @media(--medium-screen) {
                        grid-auto-columns: max-content;
                        grid-auto-flow: column;
                        grid-gap: 2rem;
                    }
                }

                .category__top-bar__heading__title {
                    font-family: inherit;
                    font-size: 1.6rem;
                    line-height: inherit;
                }

                .category__top-bar__heading__breadcrumbs {
                    color: ${colors.onSurface};
                    font-size: 1.3rem;
                    line-height: inherit;
                }

                .category__top-bar__filter-button > span {
                    align-items: center;
                    display: grid;
                    fill: currentColor;
                    font-size: 1.4rem;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 0.75rem;
                }

                .category__top-bar__filter-button__icon {
                    width: 1.2em;
                }

                .category__categories {
                    margin-top: -1rem;
                    padding: 0 2rem;
                }

                .category__content {
                    display: grid;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 3rem;
                }    

                .category__filters {
                    -webkit-overflow-scrolling: touch;   
                    backdrop-filter: blur(50px);
                    background-color: ${colors.surface75};
                    color: ${colors.onSurface};
                    display: flex;
                    flex-direction: column;
                    max-width: calc(100vw - 3rem);
                    min-width: 20rem;
                    overflow: scroll;
                    position: fixed;
                    right: 0;
                    top: 0;
                    transform: translateX(100%);
                    transition: transform 305ms ease-out;
                    width: auto;
                    z-index: 4;
                    
                    & .filters {
                        padding: 4rem;
                        flex-grow: 1;
                    }

                    &.--active {
                        box-shadow: 3rem 0 6rem rgba(0, 0, 0, 0.75);
                        transform: translateX(0);
                    }
                }

                .category__filters__buttons {
                    background-color: ${colors.surface};
                    bottom: 0;
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
            `}</style>
        </Element>
    )
}
