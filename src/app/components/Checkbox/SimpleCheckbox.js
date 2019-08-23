import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SimpleCheckbox = () => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({checked: false});
  };

  return (
      <Checkbox
        checked={state.checked}
        onClick={handleChange('checked')}
        value="checked"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
  );
};

export default SimpleCheckbox;