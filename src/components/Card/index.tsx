import { View, Pressable, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CardProps = {
    text: string;
    done: boolean;
    onRemove: () => void;
    onDone: () => void;
}

export function Card({ text, done = false, onRemove, onDone }: CardProps) {
    return (
        <View style={styles.container}>
            {
                done ? (
                    <TouchableOpacity onPress={onDone}>
                        <Image source={require("../../../assets/checked.png")} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.checkbox} onPress={onDone}>
                    </TouchableOpacity>
                )
            }
            <Text style={
                done ? styles.textDone : styles.text
            }>{ text }</Text>
            <TouchableOpacity onPress={onRemove}>
                <Image source={require("../../../assets/trash.png")} />
            </TouchableOpacity>
        </View>
    )
}