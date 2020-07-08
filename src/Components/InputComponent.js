import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = props => {
  return (
    <TextInput
      style={{
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: '#d4d4d7',
        margin: 10,
        borderRadius: 5,
        paddingRight: 20,
      }}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputComponent;
