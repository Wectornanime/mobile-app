import { NavigationContainer } from "@react-navigation/native";

import StackRouter from "./stack.router";
import TabRouter from "./tab.router";

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRouter />
        </NavigationContainer>
    )
}
