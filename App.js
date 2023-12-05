import React, { Component } from "react";
// import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
// import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";

import BottomTabNavigator from "./components/BottomTabNavigator";

const Stack = createStackNavigator();

export default class App extends Component {
  render (){
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode = "none">
          <Stack.Screen name = "Login" component = { LoginScreen}/>
          <Stack.Screen name = "Sistem" component = { BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fontLoaded: false
//     };
//   }

//   async loadFonts() {
//     await Font.loadAsync({
//       Rajdhani_600SemiBold: Rajdhani_600SemiBold
//     });
//     this.setState({ fontLoaded: true });
//   }

//   componentDidMount() {
//     this.loadFonts();
//   }

//   render() {
//     const { fontLoaded } = this.state;
//     if (fontLoaded) {
//       return <BottomTabNavigator />;
//     }
//     return null;
//   }
// }
