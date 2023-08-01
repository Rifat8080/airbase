import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import SearchField from '../SearchField.js';
import store from '../../../redux/configureStore.js';

test('SearchField snapshot test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <SearchField />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
