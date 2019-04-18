import React from 'react';
import Link from 'next/link';
const List = (({ items }) => (React.createElement("ul", { className: "main-menu__list" },
    items.map(({ name, url, items: subItems }) => (React.createElement("li", { key: url, className: "main-menu__list__item" },
        React.createElement(Link, { href: url },
            React.createElement("a", null, name)),
        subItems && React.createElement(List, { items: subItems })))),
    React.createElement("style", { jsx: true }, `
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
        `))));
export const MainMenu = ({ items }) => (React.createElement("nav", { className: "main-menu" }, items && React.createElement(List, { items: items })));
//# sourceMappingURL=MainMenu.js.map