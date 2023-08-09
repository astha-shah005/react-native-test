import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContiner: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    middleText: {
        lineHeight: 16,
        color: 'gray',
        marginTop: 10,
        backgroundColor: 'white',
    },
    headerImageView: {
        height: 65,
        width: 65,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottonText: {
        color: 'gray',
        marginLeft: 5,
    },
    border: {
        borderWidth: 0.4,
        borderColor: 'gray',
        marginTop: 12,
    },
    commentsView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 20,
        // left: 10,
    },
    textInput: {
        height: 50,
        backgroundColor: 'pink',
        borderRadius: 16,
        width: '70%',
        fontSize: 16,
        padding: 10,
        marginLeft: 10,
    },
    bottomItemsView: { flexDirection: 'row' },
    headerMiddleText: {
        marginLeft: 15,
    },
    itemView: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    authorImage: {
        height: 50,
        width: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
    },
    userNameText: {
        color: 'black',
        paddingHorizontal: 10,
        fontweight: 500,
        fontSize: 15,
        marginTop: 15,
    },
    view: {
        flexDirection: 'row',
    },
});