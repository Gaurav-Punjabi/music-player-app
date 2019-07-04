import {StyleSheet} from "react-native";
import Colors from "./constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    controlContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
    },
    songContainer: {
        // alignSelf: 'stretch',
        // alignItems: 'center'
        flexDirection: 'row',
    },
    albumArt: {
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: responsiveHeight(1),
        marginRight: responsiveWidth(5),
        // TODO : Add shadow here
    },
    infoContainer: {
        justifyContent: 'center',
        shadowColor: '#333',
    },
    songTitle: {
        fontFamily: 'fira-semibold',
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(0.3),

    },
    albumText: {
        fontFamily: 'fira-regular',
        color: Colors.greyColor,
        fontSize: responsiveFontSize(1.7)
    }
});