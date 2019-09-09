import React, { useState, useRef } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    TopBar,
    Heading,
    Title,
    TopBarFilterButton,
    FiltersIcon,
    CategoriesWrapper,
    Content,
    FiltersWrapper,
    FiltersButtons,
} from './Category.styled'

import { useResize } from '../../hooks/useResize'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import ProductList, { ProductListProps } from '../../components/ProductList'
import Filters, { FiltersProps } from '../../components/Filters'
import Button, { ButtonProps } from '../../components/Button'
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
        closeButton: ButtonProps
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

    const { vHeight } = useResize()

    const filtersRef = useRef(null)

    useOnClickOutside(filtersRef, () => setShowFilter(false))

    return (
        <Root {...props}>
            <TopBar>
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
            </TopBar>

            {categories && (
                <CategoriesWrapper>
                    <Pills {...categories} />
                </CategoriesWrapper>
            )}

            <Content>
                {pageBuilder && <PageBuilder {...pageBuilder} />}
                {products && <ProductList {...products} />}Î
            </Content>

            {filters && (
                <FiltersWrapper $active={showFilter} ref={filtersRef} style={{ height: vHeight }}>
                    <Filters {...filters} />

                    {filters.closeButton && (
                        <FiltersButtons>
                            <Button
                                as="button"
                                type="button"
                                fill
                                onClick={() => setShowFilter(false)}
                                {...filters.closeButton}
                            />
                        </FiltersButtons>
                    )}
                </FiltersWrapper>
            )}
        </Root>
    )
}
