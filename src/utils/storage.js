import AsyncStorage from '@react-native-community/async-storage';
import Ziggeo from 'react-native-ziggeo-library';

const appTokenKey = 'appToken';
export const getAppToken = () => AsyncStorage.getItem(appTokenKey);
export const saveAppToken = user => AsyncStorage.setItem(appTokenKey, user);
export const removeAppToken = () => AsyncStorage.removeItem(appTokenKey);

const customVideoMode = 'customVideoMode';
export const getCustomVideoMode = () =>
    AsyncStorage.getItem(customVideoMode).then(value => {
        if (value == null) {
            value = false;
        }
        return JSON.parse(value);
    });
export const saveCustomVideoMode = value =>
    AsyncStorage.setItem(customVideoMode, JSON.stringify(value));

const customCameraMode = 'customCameraMode';
export const getCustomCameraMode = () =>
    AsyncStorage.getItem(customCameraMode).then(value => {
        if (value == null) {
            value = false;
        }
        return JSON.parse(value);
    });

export const saveCustomCameraMode = value =>
    AsyncStorage.setItem(customCameraMode, JSON.stringify(value));

const isBlurMode = 'isBlurMode';
export const getBlurMode = () =>
    AsyncStorage.getItem(isBlurMode).then(value => {
        if (value == null) {
            value = false;
        }
        return JSON.parse(value);
    });

export const saveBlurMode = value => {
    AsyncStorage.setItem(isBlurMode, JSON.stringify(value));
    Ziggeo.setBlurMode(value);
};

const pausableMode = 'pausableMode';
export const getPausableMode = () =>
    Ziggeo.getPausableMode().then(data => {
        return data;
    });

export const savePausableMode = value => {
    Ziggeo.setPausableMode(value);
};

const videoWidth = 'videoWidth';
export const getVideoWidth = () =>
    Ziggeo.getVideoWidth().then(data => {
        return data;
    });

export const saveVideoWidth = value => {
    Ziggeo.setVideoWidth(value);
};

const videoBitrate = 'videoBitrate';
export const getVideoBitrate = () =>
    Ziggeo.getVideoBitrate().then(data => {
        return data;
    });

export const saveVideoBitrate = value => {
    Ziggeo.setVideoBitrate(value);
};

const audioSampleRate = 'audioSampleRate';
export const getAudioSampleRate = () =>
    Ziggeo.getAudioSampleRate().then(data => {
        return data;
    });

export const saveAudioSampleRate = value => {
    Ziggeo.setAudioSampleRate(value);
};

const audioBitrate = 'audioBitrate';
export const getAudioBitrate = () =>
    Ziggeo.getAudioBitrate().then(data => {
        return data;
    });

export const saveAudioBitrate = value => {
    Ziggeo.setAudioBitrate(value);
};

const videoHeight = 'videoHeight';
export const getVideoHeight = () =>
    Ziggeo.getVideoHeight().then(data => {
        return data;
    });

export const saveVideoHeight = value => {
    Ziggeo.setVideoHeight(value);
};

const liveStreamingEnabled = 'liveStreamingEnabled';
export const getLiveStreamingEnabled = () =>
    Ziggeo.getLiveStreamingEnabled().then(data => {
        return data;
    });

export const saveLiveStreamingEnabled = value => {
    Ziggeo.setLiveStreamingEnabled(value);
};

const autostartRecording = 'autostartRecording';
export const getAutostartRecording = () =>
    Ziggeo.getAutostartRecording().then(data => {
        return data;
    });

export const saveAutostartRecording = value => {
    Ziggeo.setAutostartRecordingAfter(value);
};

const startDelay = 'startDelay';
export const getStartDelay = () =>
    Ziggeo.getStartDelay().then(data => {
        return data;
    });

export const saveStartDelay = value => {
    Ziggeo.setStartDelay(value);
};

const coverSelectorEnabled = 'coverSelectorEnabled';
export const getCoverSelectorEnabled = () =>
    Ziggeo.getCoverSelectorEnabled().then(data => {
        return data;
    });

export const saveCoverSelectorEnabled = value => {
    Ziggeo.setCoverSelectorEnabled(value);
};

const maxRecordingDuration = 'maxRecordingDuration';
export const getMaxRecordingDuration = () =>
    Ziggeo.getMaxRecordingDuration().then(data => {
        return data;
    });

export const saveMaxRecordingDuration = value => {
    Ziggeo.setMaxRecordingDuration(value);
};

const cameraSwitchEnabled = 'cameraSwitchEnabled';
export const getCameraSwitchEnabled = () =>
    Ziggeo.getCameraSwitchEnabled().then(data => {
        return data;
    });

export const saveCameraSwitchEnabled = value => {
    Ziggeo.setCameraSwitchEnabled(value);
};

const sendImmediately = 'sendImmediately';
export const getSendImmediately = () =>
    Ziggeo.getSendImmediately().then(data => {
        return data;
    });

export const saveSendImmediately = value => {
    Ziggeo.setSendImmediately(value);
};

const camera = 'camera';
export const getCamera = () =>
    Ziggeo.getCamera().then(data => {
        return data;
    });

export const saveCamera = value => {
    Ziggeo.setCamera(value);
};

const quality = 'quality';
export const getQuality = () =>
    Ziggeo.getQuality().then(data => {
        return data;
    });

export const saveQuality = value => {
    Ziggeo.setQuality(value);
};

const useWifiOnly = 'useWifiOnly';
export const getUseWifiOnly = () =>
    Ziggeo.getUploadingConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'use_wifi_only') {
                return dataMap[key];
            }
        });
    });

export const saveUseWifiOnly = value => {
    Ziggeo.setUploadingConfig({
        use_wifi_only: value,
    });
};

const syncInterval = 'syncInterval';
export const getSyncInterval = () =>
    Ziggeo.getUploadingConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'sync_interval') {
                return dataMap[key];
            }
        });
    });

export const saveSyncInterval = value => {
    Ziggeo.setUploadingConfig({
        sync_interval: value,
    });
};

const turnOffUploader = 'turnOffUploader';
export const getTurnOffUploader = () =>
    Ziggeo.getUploadingConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'turn_off_uploader') {
                return dataMap[key];
            }
        });
    });

export const saveTurnOffUploader = value => {
    Ziggeo.setUploadingConfig({
        turn_off_uploader: value,
    });
};

const lostConnectionAction = 'lostConnectionAction';
export const getLostConnectionAction = () =>
    Ziggeo.getUploadingConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'lost_connection_action') {
                return dataMap[key];
            }
        });
    });

export const saveLostConnectionAction = value => {
    Ziggeo.setUploadingConfig({
        lost_connection_action: value,
    });
};

// const [hidePlayerControls, setHidePlayerControls] = useState(null);
// const [controllerStyle, setControllerStyle] = useState(null);
// const [textColor, setTextColor] = useState(null);
// const [unplayedColor, setUnplayedColor] = useState(null);
// const [playedColor, setPlayedColor] = useState(null);
// const [bufferedColor, setBufferedColor] = useState(null);
// const [tintColor, setTintColor] = useState(null);
//


const titleText = 'titleText';
export const getTitleText = () =>
    Ziggeo.getStopRecordingConfirmationDialogConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'title_text') {
                return dataMap[key];
            }
        });
    });

export const saveTitleText = value => {
    Ziggeo.setStopRecordingConfirmationDialogConfig({
        title_text: value,
    });
};

const mesText = 'mesText';
export const getMesText = () =>
    Ziggeo.getStopRecordingConfirmationDialogConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'mes_text') {
                return dataMap[key];
            }
        });
    });

export const saveMesText = value => {
    Ziggeo.setStopRecordingConfirmationDialogConfig({
        mes_text: value,
    });
};

const posBtnText = 'posBtnText';
export const getPosBtnText = () =>
    Ziggeo.getStopRecordingConfirmationDialogConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'pos_btn_text') {
                return dataMap[key];
            }
        });
    });

export const savePosBtnText = value => {
    Ziggeo.setStopRecordingConfirmationDialogConfig({
        pos_btn_text: value,
    });
};

const negBtnText = 'negBtnText';
export const getNegBtnText = () =>
    Ziggeo.getStopRecordingConfirmationDialogConfig().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'neg_btn_text') {
                return dataMap[key];
            }
        });
    });

export const saveNegBtnText = value => {
    Ziggeo.setStopRecordingConfirmationDialogConfig({
        neg_btn_text: value,
    });
};

const hidePlayerControls = 'hidePlayerControls';
export const getHidePlayerControls = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'hidePlayerControls') {
                return dataMap[key];
            }
        });
    });

export const saveHidePlayerControls = value => {
    Ziggeo.setThemeArgsForPlayer({
        hidePlayerControls: value,
    });
};

const controllerStyle = 'controllerStyle';
export const getControllerStyle = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'controllerStyle') {
                return dataMap[key];
            }
        });
    });

export const saveControllerStyle = value => {
    Ziggeo.setThemeArgsForPlayer({
        controllerStyle: value,
    });
};

const textColor = 'textColor';
export const getTextColor = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'textColor') {
                return dataMap[key];
            }
        });
    });

export const saveTextColor = value => {
    Ziggeo.setThemeArgsForPlayer({
        textColor: value,
    });
};

const unplayedColor = 'unplayedColor';
export const getUnplayedColor = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'unplayedColor') {
                return dataMap[key];
            }
        });
    });

export const saveUnplayedColor = value => {
    Ziggeo.setThemeArgsForPlayer({
        unplayedColor: value,
    });
};

const playedColor = 'playedColor';
export const getPlayedColor = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'playedColor') {
                return dataMap[key];
            }
        });
    });

export const savePlayedColor = value => {
    Ziggeo.setThemeArgsForPlayer({
        playedColor: value,
    });
};

const bufferedColor = 'bufferedColor';
export const getBufferedColor = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'bufferedColor') {
                return dataMap[key];
            }
        });
    });

export const saveBufferedColor = value => {
    Ziggeo.setThemeArgsForPlayer({
        bufferedColor: value,
    });
};

const tintColor = 'tintColor';
export const getTintColor = () =>
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
        Object.keys(dataMap).map(key => {
            if (key === 'tintColor') {
                return dataMap[key];
            }
        });
    });

export const saveTintColor = value => {
    Ziggeo.setThemeArgsForPlayer({
        tintColor: value,
    });
};
