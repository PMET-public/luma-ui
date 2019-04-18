import { storiesOf } from '@storybook/react';
import React from 'react';
import MainMenu from './';
const mockData = {
    items: [
        { name: 'Item 1', url: '/#Item1' },
        { name: 'Item 2', url: '/#Item2' },
        {
            name: 'Item 3', url: '/#Item3',
            items: [
                { name: 'Item 3.1', url: '/#Item3.1' },
                { name: 'Item 3.2', url: '/#Item3.2' },
                { name: 'Item 3.3', url: '/#Item3.3' },
            ],
        },
        {
            name: 'Item 4', url: '/#Item4',
            items: [
                { name: 'Item 4.1', url: '/#Item4.1' },
                { name: 'Item 4.2', url: '/#Item4.2' },
                {
                    name: 'Item 4.3', url: '/#Item4.3',
                    items: [
                        { name: 'Item 4.3.1', url: '/#Item4.3.1' },
                        { name: 'Item 4.3.2', url: '/#Item4.3.2' },
                        { name: 'Item 4.3.3', url: '/#Item4.3.3' },
                    ],
                },
            ],
        },
        { name: 'Item 5', url: '/#Item5' },
    ],
};
storiesOf('Components/MainMenu', module)
    .add('React', () => (React.createElement(MainMenu, { items: mockData.items })));
//# sourceMappingURL=MainMenu.story.js.map