import React, { FunctionComponent } from 'react'
import Link from 'next/link'

type Item = {
    name: string
    url: string
    items?: Item[]
}

export type MainMenuProps = {
    items: Item[]
}

const List: FunctionComponent<{ items: Item[] }> = (({ items }) => (
    <ul className="main-menu__list">
        { items.map(({ name, url, items: subItems }) => (
            <li key={url} className="main-menu__list__item">
                <Link href={url}>
                    <a>{name}</a>
                </Link>
                { subItems && <List items={subItems} /> }
            </li>
        )) }

        <style jsx>{`
            .main-menu__list {
                border: 1px dashed red;
                flex-direction: column;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .main-menu__list__item {
                display: flex;
                flex-direction: row;
            }

            .main-menu__list__item > .main-menu__list {
                display: none;
            }

            .main-menu__list__item:hover > .main-menu__list {
                display: block;
            }
        `}</style>
    </ul>
))


export const MainMenu: FunctionComponent<MainMenuProps> = ({ items }) => (
    <nav className="main-menu">
        { items && <List items={items} /> }
    </nav>
)