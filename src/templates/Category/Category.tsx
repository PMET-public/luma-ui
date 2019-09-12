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
    // FiltersButtons,
} from './Category.styled'

import { useResize } from '../../hooks/useResize'

import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import ProductList, { ProductListProps } from '../../components/ProductList'
import Filters, { FiltersProps } from '../../components/Filters'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import Pills, { PillsProps } from '../../components/Pills'

export type CategoryProps = {
    title: Props<{
        text: string
    }>
    categories?: PillsProps
    breadcrumbs?: BreadcrumbsProps
    pageBuilder?: PageBuilderProps
    filters?: {
        label: string
        open?: boolean
    } & FiltersProps

    products?: ProductListProps
}

export const Category: Component<CategoryProps> = ({
    pageBuilder,
    breadcrumbs,
    categories,
    filters,
    products,
    title,
    ...props
}) => {
    const [showFilter, setShowFilter] = useState(!!(filters && filters.open))

    const viewport = useResize()

    const filtersRef = useRef(null)

    return (
        <Root {...props}>
            <TopBar>
                <TopBarWrapper $contained $margin>
                    <Heading>
                        {breadcrumbs && <Breadcrumbs prefix="#" {...breadcrumbs} />}

                        <Title {...title}>{title.text}</Title>
                    </Heading>

                    {filters && (
                        <TopBarFilterButton as="button" type="button" onClick={() => setShowFilter(!showFilter)}>
                            <span>
                                <FiltersIcon />
                                {filters.label}
                            </span>
                        </TopBarFilterButton>
                    )}
                </TopBarWrapper>
            </TopBar>

            {categories && (
                <CategoriesWrapper $contained $margin>
                    <Pills {...categories} />
                </CategoriesWrapper>
            )}

            <Content>
                {pageBuilder && <PageBuilder {...pageBuilder} />}
                {products && (
                    <ProductListWrapper $contained $margin>
                        <ProductList {...products} />
                    </ProductListWrapper>
                )}
            </Content>

            {filters && (
                <FiltersWrapper $active={showFilter} $height={viewport.height} ref={filtersRef}>
                    <Filters {...filters} />
                </FiltersWrapper>
            )}
        </Root>
    )
}
