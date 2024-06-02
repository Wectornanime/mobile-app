import { NavigationContainer } from "@react-navigation/native"; 

import StackRouter from "./stack.router";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    )
}
