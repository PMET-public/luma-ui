import React from 'react'
import { Component, classes } from '../../lib'
import GridList from '../../components/GridList'
import ProductItem, { ProductItemProps } from '../../components/ProductItem'
import SearchBar from '../../components/SearchBar'
import Container from '../../components/Container'

export type ProductListProps = {
    products: ProductItemProps[]
}

export const ProductList: Component<ProductListProps> = ({ 
    as: ProductList = 'div', 
    products,
    ...props
}) => {
    
    return (
        <ProductList {...props} className={classes('product-list', props.className)}>
            <Container>
                <SearchBar />
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
                .product-list {
                    
                }
            `}</style>
        </ProductList>
    )
}
