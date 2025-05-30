import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
//import CadastroScreen from './screens/CadastroScreen';
//import HomeScreen from './screens/HomeScreen'; 
//<Stack.Screen name="Cadastro" component={CadastroScreen} />
//<Stack.Screen name="Home" component={HomeScreen} />

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
