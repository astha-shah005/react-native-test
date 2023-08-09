import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
    },
    itemView: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    authorImage: {
        height: 50,
        width: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
    },
    userNameText: {
        color: 'white',
        paddingHorizontal: 10,
        fontweight: 500,
        fontSize: 15,
    },
});