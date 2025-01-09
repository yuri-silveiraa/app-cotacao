import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"

export default function Layuot () {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{ title: "Dolar americano"}}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}