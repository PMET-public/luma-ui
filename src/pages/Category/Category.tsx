import React, { useState, useRef } from 'react'
import { Component, Element, Props, classNames } from '../../lib'
import styles from './Category.css'


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
    assembler?: AssemblerProps
    breadcrumbs?: BreadcrumbsProps
    categories?: PillsProps
    filters?: {
        label: string
        open?: boolean
        closeButton: ButtonProps
        props: FiltersProps
    }
    products?: ProductListProps
    title: Props
}>

export const Category: Component<CategoryProps> = ({
    assembler,
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
        <Element className={styles.root} {...props}>
            <div className={styles.topBar}>
                <div className={styles.heading}>
                    {breadcrumbs && (
                        <Breadcrumbs
                            className={styles.breadcrumbs}
                            prefix="#"
                            {...breadcrumbs}
                        />
                    )}

                    <Element className={styles.title} {...title} />
                </div>

                {filters && (
                    <button
                        className={styles.topBarFilterButton}
                        onClick={() => setShowFilter(!showFilter)}
                        type="button"
                    >
                        <span>
                            <FiltersIcon />
                            {filters.label}
                        </span>
                    </button>
                )}
            </div>

            {categories && (
                <Pills className={styles.categories} {...categories} />
            )}

            <div className={styles.content}>
                {assembler && (
                    <Assembler className={styles.assembler} {...assembler} />
                )}

                {products && (
                    <ProductList {...products} />
                )}
            </div>

            {filters && (
                <div
                    className={classNames(styles.filtersWrapper, [styles.filtersIsActive, showFilter])}
                    ref={filtersRef}
                    style={{
                        height: vHeight,
                    }}
                >
                    <Filters className={styles.filters} {...filters.props} />

                    {filters.closeButton && (
                        <div className={styles.filtersButton}>
                            <Button
                                fill
                                onClick={() => setShowFilter(false)}
                                {...filters.closeButton}
                            />
                        </div>
                    )}
                </div>
            )}
        </Element>
    )
}
