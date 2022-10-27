import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#262626",
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#333333",
        minHeight: 64,
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    checkbox: {
        borderColor: "#1E6F9F",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        height: 18,
        width: 18,
    },
    text: {
        color: "#D9D9D9",
    },
    textDone: {
        color: "#808080",
        textDecorationLine: "line-through",
    },
    buttonDelete: {
        width: 18,
        height: 18,
        backgroundColor: "#D9D9D9",
    }
});