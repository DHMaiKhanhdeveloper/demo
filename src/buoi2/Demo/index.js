import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F4B940',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={[styles.BoxStyle, styles.BoxStyleBlue]}></View>
          <View style={[styles.BoxStyle, styles.BoxStyleGreen]}></View>
        </View>
        <View style={styles.BoxStyle}>
          <Text>Blue: #3D85C6</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  BoxStyle: {
    flex: 1,
    backgroundColor: '#F4B940',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textStyle: {
    fontWeight: 20,
  },
  BoxStyleGreen: {
    backgroundColor: '#96CC96',
  },
  BoxStyleBlue: {
    backgroundColor: '#3D85C6',
  },
  BoxStyleYellow: {
    backgroundColor: '#F4B940',
  },
  BoxStylePurple: {
    backgroundColor: '#C9C9FF',
  },
});
const BoxStyle = {
  flex: 1,
  backgroundColor: '#F4B940',
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
};
