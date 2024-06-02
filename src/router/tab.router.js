import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator;

export default function TabRouter() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ Home } />
            <Tab.Screen name="Search" component={ Search } />
        </Tab.Navigator>
    )
}
