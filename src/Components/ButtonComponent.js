import React from 'react';
import {View, Button} from 'react-native';

const ButtonComponent = props => {
  return (
    <View
      style={{
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        margin: 5,
      }}>
      <Button
        disabled={props.disabled}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  );
};

export default ButtonComponent;
