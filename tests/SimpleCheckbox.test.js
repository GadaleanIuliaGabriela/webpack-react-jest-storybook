import React from 'react';
import SimpleCheckbox from '../src/app/components/Checkbox';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SimpleCheckbox/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes the state when clicked', () => {
  const component = renderer.create(<SimpleCheckbox/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});