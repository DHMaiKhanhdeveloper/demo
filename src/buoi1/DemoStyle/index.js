import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <View style={[styles.BoxStyle, styles.BoxStylePurple]}>
          <Text>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.BoxStyle, styles.BoxStyleBlue]}>
          <Text>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.BoxStyle, styles.BoxStyleGreen]}>
          <Text>Green: #96CC96</Text>
        </View>
        <View style={[styles.BoxStyle, styles.BoxStyleYellow]}>
          <Text>Yellow: #F4B940</Text>
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
