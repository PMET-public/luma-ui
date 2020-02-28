import React, { useState, useRef, useCallback } from 'react'
import { Component, Props } from '../../lib'
import { TitleSkeleton } from './Title.skeleton'

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
    loading?: boolean
    loadingMore?: boolean
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
    loading,
    loadingMore,
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

    const handleToggleFilters = useCallback(() => {
        setShowFilter(!showFilter)
    }, [showFilter, setShowFilter])

    const handleCloseFilters = useCallback(() => {
        setShowFilter(false)
    }, [showFilter, setShowFilter])

    return (
        <>
            <Root {...props}>
                {(display === 'PRODUCTS_AND_PAGE' || display === 'PAGE') && children}

                {(display === 'PRODUCTS_AND_PAGE' || display === 'PRODUCTS') && (
                    <>
                        <TopBar>
                            <TopBarWrapper $margin>
                                {search ? (
                                    <SearchBar loading={loading || loadingMore} {...search.searchBar} />
                                ) : (
                                    <Heading>
                                        {title && (
                                            <Title {...title}>
                                                {backButton && (
                                                    <BackButton {...backButton}>
                                                        <BackIcon />
                                                    </BackButton>
                                                )}
                                                {!title.text && loading ? <TitleSkeleton /> : title.text}
                                            </Title>
                                        )}
                                        {breadcrumbs && (
                                            <Breadcrumbs
                                                prefix="#"
                                                loading={!breadcrumbs && loading}
                                                {...breadcrumbs}
                                            />
                                        )}
                                        {categories && <Pills loading={!categories && loading} {...categories} />}
                                    </Heading>
                                )}
                                {filters && (
                                    <TopBarFilterButton as="button" type="button" onClick={handleToggleFilters}>
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
                                    <ProductList loadingMore={loadingMore} {...products} />
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
                                            onClick={handleCloseFilters}
                                            {...filters.closeButton}
                                        />
                                    </FiltersButtons>
                                )}
                            </FiltersWrapper>
                        )}

                        {filters && showFilter && <FiltersScreen onClick={handleCloseFilters} />}
                    </>
                )}
            </Root>

            {search && search.noResult && <NoResult $margin>{search.noResult}</NoResult>}
        </>
    )
}
