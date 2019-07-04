import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons"


import Colors from "../constants/Colors";
import * as GlobalStyles from "../styles";

// import styles from './styles';

export default class NowPlaying extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Positon : " + this.props.currentPosition);
        return (
            <LinearGradient colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
                            start={[0, 0]}
                            end={[1, 1]}>
                <TouchableWithoutFeedback onPress={this.nowPlayingClicked.bind(this)}>
                    <View style={styles.nowPlayingContainer}>
                        {/* Progress Bar*/}
                        <View style={[styles.progressBar, {width: responsiveWidth(this.props.currentPosition)}]}/>
                        {/* End of Progress Bar*/}

                        <View style={styles.controlContainer}>
                            <View style={GlobalStyles.styles.songContainer}>
                                <Image
                                    source={{uri: this.props.song.thumbnail}}
                                    style={GlobalStyles.styles.albumArt}/>
                                <View style={GlobalStyles.styles.infoContainer}>
                                    <Text style={[GlobalStyles.styles.songTitle, {color: Colors.headingColor}]}>{this.props.song.title}</Text>
                                    <Text style={GlobalStyles.styles.albumText}>{this.props.song.album} - {this.props.song.artist}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.props.onToggle()}>
                                {this.renderPlayButton()}
                                </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </LinearGradient>
        );
    }

    nowPlayingClicked() {
        this.props.navigation.navigate('NowPlaying');
    }

    // TODO : Add wrap to song title

    renderPlayButton() {
        if (this.props.isPaused) {
            return (
                <MaterialIcons name={'play-arrow'} color={Colors.headingColor} size={responsiveFontSize(6)}/>
            );
        }
        return (
            <MaterialIcons name={'pause'} color={Colors.headingColor} size={responsiveFontSize(6)}/>
        )
    }
}

const styles = StyleSheet.create({
    nowPlayingContainer: {
        height: responsiveHeight(10),
    },
    progressBar: {
        height: responsiveHeight(0.7),
        backgroundColor: Colors.headingColor,
        borderRadius: responsiveWidth(1)
    },
    controlContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
    },
});




