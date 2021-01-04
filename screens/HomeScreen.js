import React, { useState, useEffect }  from 'react';
import { Platform, Text, View, StyleSheet , Image} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { WebView } from 'react-native-webview';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Map(){

  const [location, setlocation] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const [loaded, setloaded] = useState(null);
 
  // componentWillMount has been deprecated, use componentDidMount instead
  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      seterrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
      setloaded(true)
    } else {
      _getLocationAsync();
    }
  });

  const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      seterrorMessage('Permission to access location was denied')
      setloaded(true)
    } else {
      // only check the location if it has been granted
      // you also may want to wrap this in a try/catch as async functions can throw
      let location = await Location.getLastKnownPositionAsync({ enableHighAccuracy: false});
     // this.setState({ location, loaded: true, errorMessage: null });
      setlocation(location)
      setloaded(true)
      seterrorMessage(null)
    }
  };

  
    // check to see if we have loaded
     if (loaded) {
      // if we have an error message show it
      if (errorMessage) {
        return (
          <View style={styles.container}>
            <Text>{JSON.stringify(errorMessage)}</Text>
          </View>
        );
      } else if (location) {
              //latitude = this.state.location.coords.latitude;
              //longitude = this.state.location.coords.longitude;
              //latitude = location.coords.latitude;
              //longitude = location.coords.longitude;
              newurl =  'https://www.google.com/maps/d/u/0/embed?mid=1_HTx6-vFyhgqrnYT8CC9Ml52n0-v3kAN&ll=' +location.coords.latitude+ '%2C' +location.coords.longitude+ '&z=13';
              // if we have a location show it
               return (
                     <WebView source={{ uri: newurl }} />
        );
      }
    } else {
      // if we haven't loaded show a waiting placeholder
      return (
        <View style={styles.container}>
          <Text style={{color: '#2f95dc'}}>Collecting Data points....</Text>
        </View>
      );
    }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
  
});



