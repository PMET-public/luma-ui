import React from 'react'
import { Component, classes } from '../../lib'
import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Container from '../../components/Container'
import Filters, { FiltersItemProps } from '../../components/Filters'

export type ProductListProps = {
    search: SearchBarProps
    filters: FiltersItemProps[]
    products: ProductItemProps[]
}

export const ProductList: Component<ProductListProps> = ({ 
    as: ProductList = 'div', 
    search,
    filters,
    products,
    ...props
}) => {
    return (
        <ProductList {...props} className={classes('product-list', props.className)}>
            <Container className="product-list__container">
                <SearchBar className="product-list__search-bar" {...search} />

                <div className="product-list__results">
                    <Filters className="product-list__results__filters">
                        {filters.map((item, index) => (
                            <Filters.Item key={index} {...item} />
                        ))}
                    </Filters>

                    <GridList className="product-list__results__grid">
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
                .product-list__container {
                    display: grid;
                    grid-gap: 2rem;
                }

                .product-list__search-bar {       
                    justify-self: center;
                    width: 100%;
                    background-color: transparent;
                    border-radius: 0;
                    border-bottom: 0.1rem solid;

                    @media(--medium-screen) {
                        margin: 2rem 0;
                        font-size: 2rem;
                    }
                }

                .product-list__results {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 2rem;
                }

                .product-list__results__filters {
                    padding: 4rem 2rem;
                }
            `}</style>
        </ProductList>
    )
}
