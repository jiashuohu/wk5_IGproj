import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const IgHeader= ( {navigation} ) => {
    return (
      <View style={styles.headerStyle}>
        <Image 
          style={ styles.camIconStyle }
          source={require('../icon/icons8-webcam-100.png')} 
        />
        <Image
          style={{ width: 150, height: 42 }}
          source={{uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'}}
        />
        <TouchableOpacity
          onPress = { () =>navigation.navigate('Detail')}>
          <Image 
            style={ styles.planeIconStyle } 
            source={require('../icon/icons8-paper-plane-100.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

  export default IgHeader;