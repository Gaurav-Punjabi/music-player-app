import {Audio} from "expo-av";
import {PLAY_SONG_ACTION} from "../action-types";

const INITIAL_STATE = {
    sound: new Audio.Sound(),
    isPaused: false,
    songs: [],
    duration: 0,
    position: 0,
    currentSong: {},
    isSongLoading: false
};

const songsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_SONG_ACTION :
            return state;

        default:
            return state;
    }
};

export default songsReducer;