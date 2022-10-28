import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import trashImg from "../../assets/trash.png";
import checkImg from "../../assets/checked.png";

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
                        <Image source={checkImg} />
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
                <Image source={trashImg} />
            </TouchableOpacity>
        </View>
    )
}