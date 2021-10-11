import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DemoFlex extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 50,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <View>
          <View style={{backgroundColor: '#C9C9Ff', width: 100, height: 100}} />
          <View
            style={{
              backgroundColor: '#3D85C6',
              flex: 2,
              width: 100,
              height: 500,
            }}
          />
          <View
            style={{backgroundColor: '#F42', flex: 1, width: 100, height: 100}}
          />
          <View
            style={{
              backgroundColor: '#0000ff',
              flex: 1,
              width: 100,
              height: 100,
            }}
          />
        </View>
        <View>
          <View style={{backgroundColor: '#C9C9Ff', width: 100, height: 100}} />
          <View
            style={{
              backgroundColor: '#3D85C6',
              flex: 2,
              width: 100,
              height: 100,
            }}
          />
          <View
            style={{backgroundColor: '#F42', flex: 1, width: 100, height: 100}}
          />
          <View
            style={{
              backgroundColor: '#0000ff',
              flex: 1,
              width: 100,
              height: 100,
            }}
          />
        </View>
      </View>
    );
  }
}
