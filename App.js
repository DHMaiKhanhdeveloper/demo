import React from 'react';
import {View, Text} from 'react-native';
import DemoComponets from './src/buoi1/DemoComponets';
import DemoStyle from './src/buoi1/DemoStyle';

// class App extends Componet {
//   render() {
//      return <DemoStyle/>;
//     }
//   }
//Stateless
// const App =() => {
//    return(
//        <View style={{marginTop:50}}>
//          <Text style={{fontSize:18}}>Welcome to Mai Khanh</Text>
//        </View>
//      );
// };

const App = function () {
  return <DemoStyle />;
};
export default App;
