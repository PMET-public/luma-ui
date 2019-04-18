import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import SidePanel from './';
storiesOf('Components/SideNav', module)
    .add('React', () => (React.createElement(SidePanel, { position: select('position', { left: 'left', right: 'right' }, 'left'), isOpen: boolean('isOpen', true), onClickClose: action('onClickClose') })));
//# sourceMappingURL=SidePanel.story.js.map