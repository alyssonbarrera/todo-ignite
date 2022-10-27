import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flex: 1,
    },
    background: {
        backgroundColor: "#0D0D0D",
        height: 173,
    },
    header: {
        alignItems: "center",
        paddingHorizontal: 24,
    },
    image: {
        justifyContent: "center",
        marginTop: 70,
        marginBottom: 40,
    },
    form: {
        width: "100%",
        flexDirection: "row",
    },
    input: {
        backgroundColor: "#262626",
        height: 54,
        borderRadius: 6,
        flex: 1,
        marginRight: 4,
        padding: 16,
        color: "#fff",
    },

    button: {
        height: 54,
        width: 54,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    content_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 52,
        marginBottom: 20,
    },
    content_header_text_container: {
        flexDirection: "row",
    },
    content_header_text: {
        color: "#FFF",
        marginRight: 8,
    },
    content_header_textQtd: {
        backgroundColor: "#333333",
        minWidth: 25,
        color: "#D9D9D9",
        textAlign: "center",
        borderRadius: 100,
        fontWeight: "bold",
    }
});