import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

export default class DemoImages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Image
          style={{width: 200, height: 100}}
          source={require('./newsletters-for-email-marketing.png')}></Image>
        <Image
          style={{width: 200, height: 100}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-0GSCQLgr2BnWJg7Xm-auoHk3d0WQhPCJHIIPAa_GiY4ja690-UVQpEggjXV_zTTEHk&usqp=CAU',
          }}></Image>
        <TextInput
          placeholder="User Name"
          keyboardType="number-pad" // nhập số ko nhập đc chữ
          style={{
            borderWidth: 1,
            borderColor: '#C9C9Ff',
            borderStyle: 'dotted',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
