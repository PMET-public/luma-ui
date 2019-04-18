import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import FlashMessage from './';
storiesOf('Components/FlashMessage', module)
    .add('React', () => (React.createElement(FlashMessage, { type: select('type', { info: 'info', error: 'error', warning: 'warning' }, 'info'), message: text('message', 'Hello. Is this me you`re looking for?'), onClose: action('onClose') })));
//# sourceMappingURL=FlashMessage.story.js.map