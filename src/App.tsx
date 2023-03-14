import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { ExamplesScreens } from "./screens/ExamplesScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { TokenListNavigator } from "./screens/TokenNavigator";

import * as metaplex from "@metaplex/js"
import * as web3 from "@solana/web3.js"
import * as splStake from "@solana/spl-stake-pool"
import * as unstakeIt from "@unstake-it/sol"

const Tab = createBottomTabNavigator();

function TabNavigator() {

  console.log(new web3.Keypair().publicKey.toBase58())
  console.log(metaplex)
  console.log(splStake)
  console.log(unstakeIt)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={TokenListNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Tokens",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Examples"
        component={ExamplesScreens}
        options={{
          tabBarLabel: "Examples",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
