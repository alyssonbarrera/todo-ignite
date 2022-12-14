import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import clipboardImg from "../../assets/clipboard.png";

export function Empty() {
    return (
        <View style={styles.container}>
            <Image source={clipboardImg} style={styles.image} />
            <Text style={styles.textOne}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.textTwo}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}