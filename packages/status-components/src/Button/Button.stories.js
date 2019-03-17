// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Simple', () => (
    <View style={{ marginTop: 100 }}>
      <Button title="Click Me Simple" />
    </View>
  ))
  .add('Advanced', () => (
    <View style={{ marginTop: 100 }}>
      <Button title="Click Me Advanced" color="red" />
    </View>
  ));
