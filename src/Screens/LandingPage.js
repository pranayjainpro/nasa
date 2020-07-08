import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Api} from '../Providers/Api';
import {NASA_API_KEY} from '../utils/API_KEYS';
import ButtonComponent from '../Components/ButtonComponent';
import InputComponent from '../Components/InputComponent';
import ImageComponent from '../Components/ImageComponent';
const api = new Api();
const LandingPage = props => {
  const [asteroidID, setAsteroidID] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const getNasa = id => {
    setLoader(true);
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/' + id + '?api_key=' + NASA_API_KEY;
    api
      .getApi(url)
      .then(response => {
        setLoader(false);
        // console.log(response);
        if (response === false) {
          return;
        }
        props.navigation.navigate('AsteroidData', {
          data: response,
        });
      })
      .catch(error => {
        setLoader(false);
        console.error(error);
      });
  };

  const randomAsteroid = async () => {
    setLoader(true);
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + NASA_API_KEY;
    /**
     * getting a random number b/w 0 to 20
     */
    const randomNo = Math.floor(Math.random() * (19 + 1));
    // console.log(randomNo);
    await api
      .getApi(url)
      .then(response => {
        setLoader(false);
        // console.log(response.near_earth_objects[randomNo].id);
        getNasa(response.near_earth_objects[randomNo].id);
      })
      .catch(error => {
        setLoader(false);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: 500,
          borderRadius: 10,
          backgroundColor: '#fff',
          elevation: 7,
        }}>
        <ImageComponent />
        <InputComponent
          value={asteroidID}
          onChangeText={ev => {
            // console.log(ev);
            setAsteroidID(ev);
          }}
          placeholder={'Enter Asteriod Id'}
        />
        {loader ? (
          <Text
            style={{
              textAlign: 'center',
            }}>
            Please Wait ...
          </Text>
        ) : null}
        <ButtonComponent
          disabled={!asteroidID.length}
          title={'Submit'}
          onPress={() => {
            getNasa(asteroidID);
          }}
        />
        <ButtonComponent title={'Random Id'} onPress={randomAsteroid} />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
