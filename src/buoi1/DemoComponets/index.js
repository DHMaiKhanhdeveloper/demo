import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DemoComponent extends Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 18}}>Welcome to Mai Khanh</Text>
      </View>
    );
  }
}
//Stateless
// const App =() => {
//    return(
//        <View style={{marginTop:50}}>
//          <Text style={{fontSize:18}}>Welcome to Mai Khanh</Text>
//        </View>
//      );
// };

// const App = function() {
//    return(
//        <View style={{marginTop:50}}>
//          <Text style={{fontSize:18}}>Welcome to Mai Khanh</Text>
//        </View>
//      );
// };
// export default App;

// import React, { Component } from 'react'

// export default class DemoComponets extends Component {
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
