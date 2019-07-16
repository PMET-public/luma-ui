import React from 'react'
import { Component, classes } from '../../lib'
import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Container from '../../components/Container'

export type ProductListProps = {
    search: SearchBarProps
    products: ProductItemProps[]
}

export const ProductList: Component<ProductListProps> = ({ 
    as: ProductList = 'div', 
    search,
    products,
    ...props
}) => {
    
    return (
        <ProductList {...props} className={classes('product-list', props.className)}>
            <Container className="product-list__container">
                <SearchBar className="product-list__search-bar" {...search} />

                <GridList className="product-list__grid">
                    {products && products.map((product, index) => (
                        <GridList.Item key={`product-list__grid__item--${index}`}>
                            <ProductItem className="product-list__grid__item" 
                                {...product}
                            />
                        </GridList.Item>
                    ))}
                </GridList>
            </Container>

            <style jsx global>{`
                .product-list__container {
                    display: grid;
                    grid-gap: 2rem;
                }

                .product-list__search-bar {       
                    justify-self: center;
                    max-width: 80rem;
                    width: 100%;

                    @media(--medium-screen) {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </ProductList>
    )
}
