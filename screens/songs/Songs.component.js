import React, {Component} from "react";
import {
    View,
    StyleSheet,
    FlatList
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import RoundedButton from "../../components/RoundedButton";
import SongItem from "../../components/SongItem";
import NowPlaying from "../../components/NowPlaying";
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import Colors from "../../constants/Colors";
import {MaterialIcons} from "@expo/vector-icons";

export default class SongsComponent extends Component {

    render() {
        return (
            <View style={styles.container}>

                <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={{flex: 1}}>
                    <View style={styles.buttonGroup}>
                        <RoundedButton icon={<MaterialIcons name={'play-arrow'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                       onPress={() => console.log("Play Songs")}
                                       title={"Play All"}/>
                        <RoundedButton icon={<MaterialIcons name={'shuffle'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                       onPress={() => console.log("Play Songs")}
                                       title={"Shuffle"}/>
                    </View>
                    <FlatList data={this.state.songs}
                              style={{flex: 1}}
                              keyExtractor={(data) => data.id + ""}
                              renderItem={({item}) => <SongItem song={item}
                                                                isActive={this.props.screenProps.isSongActive(item)}
                                                                songClicked={(song) => {
                                                                    this.props.screenProps.playSong(song);
                                                                    console.log("Current Songs : " + this.props.screenProps.currentSong )
                                                                }}/>}/>

                    { Object.keys(this.props.screenProps.currentSong).length !== 0 ? <NowPlaying isPaused={this.props.screenProps.isPaused}
                                                                                                 currentPosition={this.props.screenProps.position}
                                                                                                 navigation={this.props.navigation}
                                                                                                 song={this.props.screenProps.currentSong}
                                                                                                 onToggle={this.props.screenProps.togglePause.bind(this)}/>
                        : null}
                </LinearGradient>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: responsiveHeight(2)
    }
});