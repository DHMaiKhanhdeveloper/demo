import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <View style={styles.BoxStyle}>
          <Text>Purple: #C9C9FF</Text>
        </View>
        <View style={styles.BoxStyle}>
          <Text>Blue: #3D85C6</Text>
        </View>
        <View style={styles.BoxStyle}>
          <Text>Green: #96CC96</Text>
        </View>
        <View style={styles.BoxStyle}>
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
});
const BoxStyle = {
  flex: 1,
  backgroundColor: '#F4B940',
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
};
