/* eslint-disable react/prop-types */
import React from 'react';
import {TextField} from "material-ui";

const styles = {
  inputField: {
    marginLeft: 10,
    width: '40%',
    marginRight: 20,
  }
};

const InputField = ({value, name, multiLine, floatingLabelText, handleChange }) => {
  return (
    <TextField
      value={value}
      neme={name}
      floatingLabelText={floatingLabelText}
      style={{...styles.inputField, marginBottom: 20 }}
      multiLine={multiLine}
      onChange={handleChange}
    />
  );
}; 

export default InputField;
