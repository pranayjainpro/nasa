import React from 'react';
import {View} from 'react-native';
import ImageComponent from '../Components/ImageComponent';
import TextComponet from '../Components/TextComponet';
const AsteroidData = props => {
  React.useEffect(() => {
    // console.log(props.route.params.data);
  }, [props.route.params.data]);
  return (
    <View>
      <ImageComponent />
      <TextComponet
        align={'left'}
        text={'name => ' + props.route.params.data.name}
      />
      <TextComponet
        align={'left'}
        text={'nasa_jpl_url => ' + props.route.params.data.nasa_jpl_url}
      />
      <TextComponet
        align={'left'}
        text={
          props.route.params.data.is_potentially_hazardous_asteroid
            ? ' is_potentially_hazardous_asteroid => True'
            : ' is_potentially_hazardous_asteroid => False'
        }
      />
    </View>
  );
};

export default AsteroidData;
