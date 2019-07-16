import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'

export type GridListProps = {
    children: ReactElement<GridListItemProps> | Array<ReactElement<GridListItemProps>>
}

export type GridListItemProps = {
    children: ReactElement | ReactElement[]
}

type CompoundComponent = {
    Item: Component<GridListItemProps>
}

export const GridList: Component<GridListProps> & CompoundComponent = ({ 
    as: GridList = 'div', 
    children,
    ...props
}) => {
    
    return (
        <GridList {...props} className={classes('grid-list', props.className)}>
            {children}

            <style jsx global>{`
                .grid-list {
                    display: grid;
                    grid-gap: 3rem 0.65rem;
                    grid-template-columns: repeat(12, 1fr);
                }
            `}</style>
        </GridList>
    )
}

GridList.Item = ({ 
    as: GridListItem = 'div',
    children,
    ...props
}) => {
    return (
        <GridListItem {...props} className={classes('grid-list-item', props.className)}>
            {children}

            <style jsx global>{`
                .grid-list-item {
                    @media(--small-screen-only) {
                        grid-column-end: span 6;
                        
                        &:nth-child(3n + 1) {
                            grid-column-end: span 12;
                        }
                    }

                    @media(--medium-screen) {
                        grid-column-end: span 4;

                        &:nth-child(5n+1),
                        &:nth-child(5n+2) {
                            grid-column-end: span 6;
                        }
                    }                    
                }
            `}</style>
        </GridListItem>

    )
}
