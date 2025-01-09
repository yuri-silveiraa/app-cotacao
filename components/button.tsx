import { Pressable, Text, StyleSheet } from "react-native"

type Props = {
    label: String
    onPress: () => void
}
export const Button = ({label, onPress}: Props) => {
    return (
        <Pressable style={styles.containeir} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containeir: {
        backgroundColor: "#C0E864",
        borderRadius: 5,
        padding: 15
    },
    text: {
        fontSize: 15,
        color: "#000000",
        textAlign: "center"
    }
})