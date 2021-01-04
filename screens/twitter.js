import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

export default function Twitter() {

  return ( 
    <WebView
        source={{ html: '<head><meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"></head><a class="twitter-timeline" href="https://twitter.com/Coronapp2?ref_src=twsrc%5Etfw">Tweets by Coronapp2</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' }}
      />
);
 
}