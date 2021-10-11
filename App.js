import React from 'react';
import {View, Text} from 'react-native';
import DemoComponets from './src/buoi1/DemoComponets';
import DemoStyle from './src/buoi1/DemoStyle';
import DemoFlex from './src/buoi2/DemoFlex';
import Demo from './src/buoi2/Demo';
import DemoImages from './src/buoi2/DemoImages';

// class App extends Componet {
//   render() {
//      return <DemoStyle/>;
//     }
//   }
// Stateless
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
