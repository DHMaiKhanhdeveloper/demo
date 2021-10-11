import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#808080',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text>Purple: #C9C9FF</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#3D85C6',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text>Blue: #3D85C6</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#96CC96',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text>Green: #96CC96</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F4B940',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}
