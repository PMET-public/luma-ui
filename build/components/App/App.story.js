import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import App from './';
const flashMessage = {
    type: 'info',
    message: 'Hello ',
    onClose: action('onClose')
};
storiesOf('Components/App', module)
    .add('React', () => (React.createElement(App, { flashMessage: boolean('Flash Message', false) ? flashMessage : undefined })));
//# sourceMappingURL=App.story.js.map