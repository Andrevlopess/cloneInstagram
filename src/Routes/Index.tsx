import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Home} from "../Screens/Home";

const Tab = createMaterialBottomTabNavigator();

export default props => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
)