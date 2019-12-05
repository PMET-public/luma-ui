import React, { useState, useRef } from 'react'
import { Component, Props } from '../../lib'
import ContentLoader from 'react-content-loader'

import {
    Root,
    TopBar,
    TopBarWrapper,
    Heading,
    Title,
    BackButton,
    BackIcon,
    TopBarFilterButton,
    FiltersIcon,
    Content,
    ProductListWrapper,
    FiltersWrapper,
    FiltersButtons,
    FiltersScreen,
    NoResult,
} from './Category.styled'

import { useResize } from '../../hooks/useResize'

import ProductList, { ProductListProps } from '../../components/ProductList'
import Filters, { FiltersProps } from '../../components/Filters'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import Pills, { PillsProps } from '../../components/Pills'
import Button, { ButtonProps } from '../../components/Button'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'

export type CategoryProps = {
    display?: 'PRODUCTS' | 'PAGE' | 'PRODUCTS_AND_PAGE'
    title?: Props<{
        text: string
    }>
    backButton?: Props
    search?: {
        searchBar: SearchBarProps
        noResult?: React.ReactNode
    }
    categories?: PillsProps
    breadcrumbs?: BreadcrumbsProps
    filters?: {
        label: string
        open?: boolean
        closeButton?: ButtonProps
    } & FiltersProps

    products?: ProductListProps
}

export const Category: Component<CategoryProps> = ({
    display = 'PRODUCTS',
    breadcrumbs,
    categories,
    children,
    filters,
    products,
    search,
    title,
    backButton,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!(filters && filters.open))

    const viewport = useResize()

    const filtersRef = useRef(null)

    return (
        <>
            <Root {...props}>
                {(display === 'PRODUCTS_AND_PAGE' || display === 'PAGE') && children}

                {(display === 'PRODUCTS_AND_PAGE' || display === 'PRODUCTS') && (
                    <>
                        <TopBar>
                            <TopBarWrapper $margin>
                                {search ? (
                                    <SearchBar {...search.searchBar} />
                                ) : (
                                    <Heading>
                                        {title && (
                                            <Title {...title}>
                                                {backButton && (
                                                    <BackButton {...backButton}>
                                                        <BackIcon />
                                                    </BackButton>
                                                )}
                                                {title.text || (
                                                    <ContentLoader
                                                        height={16}
                                                        width={200}
                                                        speed={2}
                                                        primaryColor="#f3f3f3"
                                                        secondaryColor="#ecebeb"
                                                        style={{ width: '20rem' }}
                                                    >
                                                        <rect x="0" y="0" rx="3" ry="3" width="200" height="16" />
                                                    </ContentLoader>
                                                )}
                                            </Title>
                                        )}
                                        {breadcrumbs && <Breadcrumbs prefix="#" {...breadcrumbs} />}
                                        {categories && <Pills {...categories} />}
                                    </Heading>
                                )}
                                {filters && (
                                    <TopBarFilterButton
                                        as="button"
                                        type="button"
                                        onClick={() => setShowFilter(!showFilter)}
                                    >
                                        <span>
                                            <FiltersIcon aria-label={filters.label} />
                                        </span>
                                    </TopBarFilterButton>
                                )}
                            </TopBarWrapper>
                        </TopBar>

                        <Content>
                            {products && (
                                <ProductListWrapper $margin>
                                    <ProductList {...products} />
                                </ProductListWrapper>
                            )}
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
                    </>
                )}
            </Root>

            {search && search.noResult && <NoResult $margin>{search.noResult}</NoResult>}
        </>
    )
}
