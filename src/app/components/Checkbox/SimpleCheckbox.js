import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SimpleCheckbox = ({isChecked}) => {
  const [state, setState] = React.useState({
    checked: isChecked,
  });

  const handleChange = name => event => {
    setState({checked: !state.checked});
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