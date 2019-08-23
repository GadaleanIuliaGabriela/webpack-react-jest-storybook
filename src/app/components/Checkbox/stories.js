import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleCheckbox from './SimpleCheckbox';

storiesOf('Checkbox', module)
  .add('checked', () => {
    return (
      <SimpleCheckbox />
    )
  });