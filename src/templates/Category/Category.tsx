import React, { useState, useRef } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    TopBar,
    TopBarWrapper,
    Heading,
    Title,
    TopBarFilterButton,
    FiltersIcon,
    CategoriesWrapper,
    Content,
    ProductListWrapper,
    FiltersWrapper,
    FiltersButtons,
    FiltersScreen,
    NoResult,
} from './Category.styled'

import { useResize } from '../../hooks/useResize'

// import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import ProductList, { ProductListProps } from '../../components/ProductList'
import Filters, { FiltersProps } from '../../components/Filters'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import Pills, { PillsProps } from '../../components/Pills'
import Button, { ButtonProps } from '../../components/Button'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'

export type CategoryProps = {
    title?: Props<{
        text: string
    }>
    search?: {
        searchBar: SearchBarProps
        noResult?: string
    }
    categories?: PillsProps
    breadcrumbs?: BreadcrumbsProps
    // cmsBlock?: PageBuilderProps
    filters?: {
        label: string
        open?: boolean
        closeButton?: ButtonProps
    } & FiltersProps

    products?: ProductListProps
}

export const Category: Component<CategoryProps> = ({
    breadcrumbs,
    categories,
    children,
    filters,
    // cmsBlock,
    products,
    search,
    title,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!(filters && filters.open))

    const viewport = useResize()

    const filtersRef = useRef(null)

    return (
        <Root {...props}>
            <TopBar>
                <TopBarWrapper $margin>
                    {search ? (
                        <SearchBar {...search.searchBar} />
                    ) : (
                        <Heading>
                            {title && <Title {...title}>{title.text}</Title>}
                            {breadcrumbs && <Breadcrumbs prefix="#" {...breadcrumbs} />}
                        </Heading>
                    )}
                    {filters && (
                        <TopBarFilterButton as="button" type="button" onClick={() => setShowFilter(!showFilter)}>
                            <span>
                                <FiltersIcon aria-label={filters.label} />
                            </span>
                        </TopBarFilterButton>
                    )}
                </TopBarWrapper>
            </TopBar>

            {categories && (
                <CategoriesWrapper>
                    <Pills {...categories} />
                </CategoriesWrapper>
            )}

            <Content>
                {/* {cmsBlock && <PageBuilder {...cmsBlock} />} */}

                {products && (
                    <ProductListWrapper $margin>
                        <ProductList {...products} />
                    </ProductListWrapper>
                )}

                {search && search.noResult && <NoResult $margin>{search.noResult}</NoResult>}
            </Content>

            {filters && (
                <FiltersWrapper $active={showFilter} $height={viewport.height} ref={filtersRef}>
                    <Filters {...filters} />
                    {filters.closeButton && (
                        <FiltersButtons>
                            <Button
                                as="button"
                                type="button"
                                onClick={() => setShowFilter(false)}
                                {...filters.closeButton}
                            />
                        </FiltersButtons>
                    )}
                </FiltersWrapper>
            )}

            {filters && showFilter && <FiltersScreen onClick={() => setShowFilter(false)} />}
        </Root>
    )
}
