import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>  
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
             name="Home"
             options={{
              headerShown:false
             }}
            component={HomeScreen}/>
            <Stack.Screen
             name="Game Screen" 
             options={{
              headerShown:false
             }}
             component={GameScreen}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
