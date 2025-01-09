import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeApi";

export default function Screen() {

    const [loading, setLoading] = useState(false)
    const [currentValue, setCurrentValue] = useState<number>(0)


    const updateCurrency = async () => {
        setLoading(true)
        const euro = await getEUR()
        setLoading(false)
        setCurrentValue(euro)
    }

    useEffect(() => {
        updateCurrency()
    }, [])

    return (
        <View>
            <Image 
                source={require("./../assets/euro.png")}
                resizeMode="contain"
                style={styles.logo}
            />

            {loading && 
                <Text style={styles.h2}>Carregando...</Text>
            }
            
            {!loading &&
                <>
                    <Text style={styles.h2}>O Euro esta:</Text>
                    <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)}</Text>

                    <Button 
                        label="Atualizar"
                        onPress={updateCurrency}
                    />
                </>
            }
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