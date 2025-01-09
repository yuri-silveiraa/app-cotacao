import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "../components/button";

export default function Screen() {

    const updateCurrency = () => {
        
    }

    return (
        <View>
            <Image 
                source={require("./../assets/dolar.png")}
                resizeMode="contain"
                style={styles.logo}
            />

            <Text style={styles.h2}>O dólar americano esta:</Text>
            <Text style={styles.currencyText}>R$ 99,99</Text>

            <Button 
                label="Atualizar"
                onPress={updateCurrency}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B1C2D',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 180
    },
    h2: {
        fontSize: 24,
        color: '#cccccc',
        marginTop: 30
    },
    currencyText: {
        fontSize: 52,
        fontWeight: 'bold',
        color: '#fffFFF',
        marginTop: 20,
        marginBottom: 50
    }
})