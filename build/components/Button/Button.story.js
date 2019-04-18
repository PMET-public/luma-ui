import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './';
storiesOf('Components/Button', module)
    .add('React', () => (React.createElement(Button, null, text('Text', 'button'))));
//# sourceMappingURL=Button.story.js.map