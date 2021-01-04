import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import Map from '../screens/HomeScreen';
import Twitter from '../screens/twitter';
import market from '../screens/App'
import health from '../screens/LoginScreen'
import log from '../screens/log'


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>




    <BottomTab.Screen
        name="screen"
        component={Map}
        options={{
          title: 'Around',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="location-arrow" />,
        }}
      />
      
     

<BottomTab.Screen
        name="Twitter"
        component={Twitter}
        options={{
          title: 'Twitter',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="twitter" />,
        }}
      />



<BottomTab.Screen
        name="connect"
        component={market}
        options={{
          title: 'Connect',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user-friends" />,
        }}
      />


<BottomTab.Screen
        name="Links"
        component={health}
        options={{
          title: 'Health',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heartbeat" />,
        }}
      />



    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  
}
