import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home";
import { View } from "react-native-web";
import Overview from "./pages/Overview";
import Hospital from "./pages/Hospitals";

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hospitals" component={Hospital} />
        <Stack.Screen name="Overview" component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
