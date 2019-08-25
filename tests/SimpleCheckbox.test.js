import React from 'react';
import TestRenderer from "react-test-renderer";
import SimpleCheckbox from '../src/app/components/Checkbox';
import renderer from 'react-test-renderer';

const act = TestRenderer.act;

it('renders correctly', () => {
  const tree = renderer
    .create(<SimpleCheckbox/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes from check to uncheck', () => {
    const component = renderer.create(<SimpleCheckbox isChecked={true}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree['className'] === ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-checked-8 Mui-checked MuiIconButton-colorSecondary'));

    act(() => tree.props.onClick());

    tree = component.toJSON();
    expect(tree['className'] !== ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-checked-8 Mui-checked MuiIconButton-colorSecondary'));
    expect(tree['className'] === ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary'));
});

it('changes from uncheck to check', () => {
    const component = renderer.create(<SimpleCheckbox isChecked={false}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree['className'] === ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary'));

    act(() => tree.props.onClick());

    tree = component.toJSON();
    expect(tree['className'] !== ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary'));
    expect(tree['className'] === ('MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-7 MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-checked-8 Mui-checked MuiIconButton-colorSecondary'));
});