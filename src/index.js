import React, { Component } from 'react';

import Map from './components/Map';
import { View } from 'react-native';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Map />
      </View>
    );
  }
}
