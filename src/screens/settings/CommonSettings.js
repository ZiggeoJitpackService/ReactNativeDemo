import {ScrollView, StyleSheet, Switch, View} from 'react-native';
import Strings from '../../Strings';
import React from 'react';
import createToolbar from '../../ui/Toolbar';
import Theme from '../../Theme';
import createButton from '../../ui/Button';
import Text from '../../ui/Text';
import createTextField from '../../ui/TextField';

import {
    getAudioBitrate,
    getAudioSampleRate,
    getAutostartRecording,
    getBlurMode,
    getCamera,
    getCameraSwitchEnabled,
    getCoverSelectorEnabled,
    getCustomCameraMode,
    getCustomVideoMode,
    getLiveStreamingEnabled,
    getMaxRecordingDuration,
    getPausableMode,
    getQuality,
    getSendImmediately,
    getStartDelay,
    getSyncInterval,
    getUseWifiOnly,
    getVideoBitrate,
    getVideoHeight,
    getVideoWidth,
    getTitleText,
    getMesText,
    getPosBtnText,
    getNegBtnText,
    getHidePlayerControls,
    getControllerStyle,
    getTextColor,
    getUnplayedColor,
    getPlayedColor,
    getBufferedColor,
    getTintColor,
    saveAudioBitrate,
    saveAudioSampleRate,
    saveAutostartRecording,
    saveBlurMode,
    saveCamera,
    saveCoverSelectorEnabled,
    saveCustomCameraMode,
    saveCustomVideoMode,
    saveLiveStreamingEnabled,
    saveLostConnectionAction,
    saveMaxRecordingDuration,
    savePausableMode,
    saveQuality,
    saveSendImmediately,
    saveStartDelay,
    saveSyncInterval,
    saveTurnOffUploader,
    saveUseWifiOnly,
    saveVideoBitrate,
    saveVideoHeight,
    saveVideoWidth,
    saveTitleText,
    saveMesText,
    savePosBtnText,
    saveNegBtnText,
    saveHidePlayerControls,
    saveControllerStyle,
    saveTextColor,
    saveUnplayedColor,
    savePlayedColor,
    saveBufferedColor,
    saveTintColor,
} from '../../utils/storage';
import {textFontStyle} from '../../ui/textFontStyle';
import {SelectList} from 'react-native-dropdown-select-list'

const cameraData = [
    {key: '0', value: 'Camera1'},
    {key: '1', value: 'Camera2'},
]

const qualityData = [
    {key: '0', value: 'QUALITY_HIGH'},
    {key: '1', value: 'QUALITY_MEDIUM'},
    {key: '2', value: 'QUALITY_LOW'},
]

const controllersStyleData = [
    {key: '0', value: 'DEFAULT'},
    {key: '1', value: 'MODERN'},
    {key: '2', value: 'CUBE'},
    {key: '3', value: 'SPACE'},
    {key: '4', value: 'MINIMALIST'},
    {key: '5', value: 'ELEVATE'},
    {key: '6', value: 'THEATRE'},

]

export class CommonSettings extends React.Component {
    constructor(props) {
        super(props);
        this.onBtnSaveSettingsPressed = this.onBtnSaveSettingsPressed.bind(this);
        this.onHidePlayerControlsChange = this.onHidePlayerControlsChange.bind(this);
        this.onControllerStyleChange = this.onControllerStyleChange.bind(this);
        this.onUnplayedColorChange = this.onUnplayedColorChange.bind(this);
        this.onPlayedColorChange = this.onPlayedColorChange.bind(this);
        this.onBufferedColorChange = this.onBufferedColorChange.bind(this);
        this.onTitleTextChange = this.onTitleTextChange.bind(this);
        this.onMesTextChange = this.onMesTextChange.bind(this);
        this.onPosBtnTextChange = this.onPosBtnTextChange.bind(this);
        this.onNegBtnTextChange = this.onNegBtnTextChange.bind(this);
        this.onVideoWidthChange = this.onVideoWidthChange.bind(this);
        this.onVideoBitrateChange = this.onVideoBitrateChange.bind(this);
        this.onAudioSampleRateChange = this.onAudioSampleRateChange.bind(this);
        this.onAudioBitrateChange = this.onAudioBitrateChange.bind(this);
        this.onVideoHeightChange = this.onVideoHeightChange.bind(this);
        this.onMaxRecordingDurationChange = this.onMaxRecordingDurationChange.bind(this);
        this.onStartDelayChange = this.onStartDelayChange.bind(this);
        this.onQualityChange = this.onQualityChange.bind(this);
        this.onCameraChange = this.onCameraChange.bind(this);
        this.onSyncIntervalTextChange = this.onSyncIntervalTextChange.bind(this);
        this.onAutostartRecordingTextChange = this.onAutostartRecordingTextChange.bind(this);
        this.onLostConnTextChange = this.onLostConnTextChange.bind(this);
        this.onQualityChange = this.onQualityChange.bind(this);

        this.state = {
            isCustomCamera: false,
            isCustomVideo: false,
            isBlurMode: false,
            useWifiOnly: false,
            syncInterval: '',
            turnOffUploader: false,
            lostConnectionAction: '',
            pausableMode: false,
            videoWidth: '',
            videoBitrate: '',
            audioSampleRate: '',
            audioBitrate: '',
            videoHeight: '',
            liveStreamingEnabled: false,
            autostartRecording: '',
            startDelay: '',
            coverSelectorEnabled: false,
            maxRecordingDuration: '',
            cameraSwitchEnabled: false,
            sendImmediately: false,
            camera: '',
            quality: '',
            titleText: '',
            mesText: '',
            posBtnText: '',
            negBtnText: '',
            hidePlayerControls: '',
            controllerStyle: '0',
            textColor: '',
            unplayedColor: '',
            playedColor: '',
            bufferedColor: '',
            tintColor: '',
        };
    }

    componentDidMount() {
        this.loadCustomModeData();
    }

    loadCustomModeData = async () => {
        let isCustomCamera = await getCustomCameraMode();
        let isCustomVideo = await getCustomVideoMode();
        let isBlurMode = await getBlurMode();
        let useWifiOnly = await getUseWifiOnly();
        let syncInterval = await getSyncInterval();
        let turnOffUploader = await getTurnOffUploader();
        let lostConnectionAction = await getLostConnectionAction();
        let pausableMode = await getPausableMode();
        let videoWidth = await getVideoWidth();
        let videoBitrate = await getVideoBitrate();
        let audioSampleRate = await getAudioSampleRate();
        let audioBitrate = await getAudioBitrate();
        let videoHeight = await getVideoHeight();
        let liveStreamingEnabled = await getLiveStreamingEnabled();
        let autostartRecording = await getAutostartRecording();
        let startDelay = await getStartDelay();
        let coverSelectorEnabled = await getCoverSelectorEnabled();
        let maxRecordingDuration = await getMaxRecordingDuration();
        let cameraSwitchEnabled = await getCameraSwitchEnabled();
        let sendImmediately = await getSendImmediately();
        let camera = await getCamera();
        let quality = await getQuality();
        let titleText = await getTitleText();
        let mesText = await getMesText();
        let posBtnText = await getPosBtnText();
        let negBtnText = await getNegBtnText();
        let hidePlayerControls = await getHidePlayerControls();
        let controllerStyle = await getControllerStyle();
        let textColor = await getTextColor();
        let unplayedColor = await getUnplayedColor();
        let playedColor = await getPlayedColor();
        let bufferedColor = await getBufferedColor();
        let tintColor = await getTintColor();

        if (isCustomCamera !== null) {
            this.setState({isCustomCamera});
        }
        if (isCustomVideo !== null) {
            this.setState({isCustomVideo});
        }
        if (lostConnectionAction !== null) {
            this.setState({lostConnectionAction});
        }
        if (pausableMode !== null) {
            this.setState({pausableMode});
        }
        if (videoWidth !== null) {
            this.setState({videoWidth});
        }
        if (isBlurMode !== null) {
            this.setState({isBlurMode});
        }
        if (videoBitrate !== null) {
            this.setState({videoBitrate});
        }
        if (audioSampleRate !== null) {
            this.setState({audioSampleRate});
        }
        if (audioBitrate !== null) {
            this.setState({audioBitrate});
        }
        if (videoHeight !== null) {
            this.setState({videoHeight});
        }
        if (liveStreamingEnabled !== null) {
            this.setState({liveStreamingEnabled});
        }
        if (autostartRecording !== null) {
            this.setState({autostartRecording});
        }
        if (startDelay !== null) {
            this.setState({startDelay});
        }
        if (coverSelectorEnabled !== null) {
            this.setState({coverSelectorEnabled});
        }
        if (maxRecordingDuration !== null) {
            this.setState({maxRecordingDuration});
        }
        if (cameraSwitchEnabled !== null) {
            this.setState({cameraSwitchEnabled});
        }
        if (sendImmediately !== null) {
            this.setState({sendImmediately});
        }
        if (camera !== null) {
            this.setState({camera});
        }
        if (quality !== null) {
            this.setState({quality});
        }
        if (useWifiOnly !== null) {
            this.setState({useWifiOnly});
        }
        if (getSyncInterval != null) {
            this.setState({syncInterval});
        }
        if (turnOffUploader != null) {
            this.setState({turnOffUploader});
        }
        if (lostConnectionAction != null) {
            this.setState({lostConnectionAction});
        }
        if (titleText != null) {
            this.setState({titleText});
        }
        if (mesText != null) {
            this.setState({mesText});
        }
        if (posBtnText != null) {
            this.setState({posBtnText});
        }
        if (negBtnText != null) {
            this.setState({negBtnText});
        }

        if (hidePlayerControls != null) {
            this.setState({hidePlayerControls});
        }
        if (controllerStyle != null) {
            this.setState({controllerStyle});
        }
        if (textColor != null) {
            this.setState({textColor});
        }
        if (unplayedColor != null) {
            this.setState({unplayedColor});
        }
        if (playedColor != null) {
            this.setState({playedColor});
        }
        if (bufferedColor != null) {
            this.setState({bufferedColor});
        }
        if (tintColor != null) {
            this.setState({tintColor});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {createToolbar(Strings.titleSettings, this.props)}
                <ScrollView>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.customVideoMode}
                        </Text>
                        <Switch
                            value={this.state.isCustomVideo}
                            onValueChange={isCustomVideo => {
                                this.setState({isCustomVideo});
                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.customCameraMode}
                        </Text>
                        <Switch
                            value={this.state.isCustomCamera}
                            onValueChange={isCustomCamera => {
                                this.setState({isCustomCamera});
                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.blurMode}
                        </Text>
                        <Switch
                            value={this.state.isBlurMode}
                            onValueChange={isBlurMode => {
                                this.setState({isBlurMode});
                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.pausableMode}
                        </Text>
                        <Switch
                            value={this.state.pausableMode}
                            onValueChange={pausableMode => {
                                this.setState({pausableMode});
                            }}
                        />
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.videoWidth,
                                textColor: Theme.colors.accent,
                                value: this.state.videoWidth,
                                onChangeText: this.onVideoWidthChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.videoBitrate,
                                textColor: Theme.colors.accent,
                                value: this.state.videoBitrate,
                                onChangeText: this.onVideoBitrateChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.audioSampleRate,
                                textColor: Theme.colors.accent,
                                value: this.state.audioSampleRate,
                                onChangeText: this.onAudioSampleRateChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.audioBitrate,
                                textColor: Theme.colors.accent,
                                value: this.state.audioBitrate,
                                onChangeText: this.onAudioBitrateChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.videoHeight,
                                textColor: Theme.colors.accent,
                                value: this.state.videoHeight,
                                onChangeText: this.onVideoHeightChange
                            }
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.liveStreamingEnabled}
                        </Text>
                        <Switch
                            value={this.state.liveStreamingEnabled}
                            onValueChange={liveStreamingEnabled => {
                                this.setState({liveStreamingEnabled});
                            }}
                        />
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.audioBitrate,
                                textColor: Theme.colors.accent,
                                value: this.state.autostartRecording,
                                onChangeText: this.onAutostartRecordingTextChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.startDelay,
                                textColor: Theme.colors.accent,
                                value: this.state.startDelay,
                                onChangeText: this.onStartDelayChange
                            }
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.coverSelectorEnabled}
                        </Text>
                        <Switch
                            value={this.state.coverSelectorEnabled}
                            onValueChange={coverSelectorEnabled => {
                                this.setState({coverSelectorEnabled});
                            }}
                        />
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.maxRecordingDuration,
                                textColor: Theme.colors.accent,
                                value: this.state.maxRecordingDuration,
                                onChangeText: this.onMaxRecordingDurationChange
                            }
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.cameraSwitchEnabled}
                        </Text>
                        <Switch
                            value={this.state.cameraSwitchEnabled}
                            onValueChange={cameraSwitchEnabled => {
                                this.setState({cameraSwitchEnabled});
                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.sendImmediately}
                        </Text>
                        <Switch
                            value={this.state.sendImmediately}
                            onValueChange={sendImmediately => {
                                this.setState({sendImmediately});
                            }}
                        />
                    </View>
                    <SelectList
                        setSelected={(val) => this.setState({camera: val})}
                        data={cameraData}
                        save="key"
                        placeholder={Strings.camera}
                    />
                    <SelectList
                        placeholder={Strings.quality}
                        setSelected={(val) => this.setState({quality: val})}
                        data={qualityData}
                        save="key"
                    />
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.useWIFIonly}
                        </Text>
                        <Switch
                            value={this.state.useWifiOnly}
                            onValueChange={useWifiOnly => {
                                this.setState({useWifiOnly});
                            }}
                        />
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.syncInterval,
                                textColor: Theme.colors.accent,
                                value: this.state.syncInterval,
                                onChangeText: this.onSyncIntervalChange
                            }
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={[
                                textFontStyle.textStyle,
                                {
                                    fontSize: Theme.size.toolbarTextSize,
                                },
                            ]}>
                            {Strings.turnOffUploader}
                        </Text>
                        <Switch
                            value={this.state.turnOffUploader}
                            onValueChange={turnOffUploader => {
                                this.setState({turnOffUploader});
                            }}
                        />
                    </View>

                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.lostConnectionAction,
                                textColor: Theme.colors.accent,
                                value: this.state.lostConnectionAction,
                                onChangeText: this.onLostConnTextChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.titleText,
                                textColor: Theme.colors.accent,
                                value: this.state.titleText,
                                onChangeText: this.onTitleTextChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.mesText,
                                textColor: Theme.colors.accent,
                                value: this.state.mesText,
                                onChangeText: this.onMesTextChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.posBtnText,
                                textColor: Theme.colors.accent,
                                value: this.state.posBtnText,
                                onChangeText: this.onPosBtnTextChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.negBtnText,
                                textColor: Theme.colors.accent,
                                value: this.state.negBtnText,
                                onChangeText: this.onNegBtnTextChange
                            }
                        )}
                    </View>

                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.hidePlayerControls,
                                textColor: Theme.colors.accent,
                                value: this.state.hidePlayerControls,
                                onChangeText: this.onHidePlayerControlsChange
                            }
                        )}
                    </View>
                    <SelectList
                        placeholder={Strings.controllerStyle}
                        setSelected={(val) => this.setState({controllerStyle: val})}
                        data={controllersStyleData}
                        save="key"
                    />
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.textColor,
                                textColor: Theme.colors.accent,
                                value: this.state.textColor,
                                onChangeText: this.onTextColorChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.unplayedColor,
                                textColor: Theme.colors.accent,
                                value: this.state.unplayedColor,
                                onChangeText: this.onUnplayedColorChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.playedColor,
                                textColor: Theme.colors.accent,
                                value: this.state.playedColor,
                                onChangeText: this.onPlayedColorChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.bufferedColor,
                                textColor: Theme.colors.accent,
                                value: this.state.bufferedColor,
                                onChangeText: this.onBufferedColorChange
                            }
                        )}
                    </View>
                    <View style={styles.controls}>
                        {createTextField({
                                label: Strings.tintColor,
                                textColor: Theme.colors.accent,
                                value: this.state.tintColor,
                                onChangeText: this.onTintColorChange
                            }
                        )}
                    </View>
                </ScrollView>
                {createButton(
                    Strings.saveSettings,
                    this.onBtnSaveSettingsPressed,
                    styles.btnSaveSettings,
                )}
            </View>
        );
    }


    onHidePlayerControlsChange(text) {
        this.setState({
            hidePlayerControls: text.trim(),
        });
    }

    onControllerStyleChange(text) {
        this.setState({
            controllerStyle: text.trim(),
        });
    }

    onTextColorChange(text) {
        this.setState({
            textColor: text.trim(),
        });
    }

    onUnplayedColorChange(text) {
        this.setState({
            unplayedColor: text.trim(),
        });
    }

    onPlayedColorChange(text) {
        this.setState({
            playedColor: text.trim(),
        });
    }

    onBufferedColorChange(text) {
        this.setState({
            bufferedColor: text.trim(),
        });
    }

    onTintColorChange(text) {
        this.setState({
            tintColor: text.trim(),
        });
    }

    onTitleTextChange(text) {
        this.setState({
            titleText: text.trim(),
        });
    }

    onMesTextChange(text) {
        this.setState({
            mesText: text.trim(),
        });
    }

    onPosBtnTextChange(text) {
        this.setState({
            posBtnText: text.trim(),
        });
    }

    onNegBtnTextChange(text) {
        this.setState({
            negBtnText: text.trim(),
        });
    }

    onVideoWidthChange(text) {
        this.setState({
            videoWidth: text.trim(),
        });
    }

    onVideoBitrateChange(text) {
        this.setState({
            videoBitrate: text.trim(),
        });
    }

    onAudioSampleRateChange(text) {
        this.setState({
            audioSampleRate: text.trim(),
        });
    }

    onAudioBitrateChange(text) {
        this.setState({
            audioBitrate: text.trim(),
        });
    }

    onVideoHeightChange(text) {
        this.setState({
            videoHeight: text.trim(),
        });
    }

    onMaxRecordingDurationChange(text) {
        this.setState({
            maxRecordingDuration: text.trim(),
        });
    }

    onStartDelayChange(text) {
        this.setState({
            startDelay: text.trim(),
        });
    }

    onQualityChange(text) {
        this.setState({
            quality: text.trim(),
        });
    }

    onCameraChange(text) {
        this.setState({
            camera: text.trim(),
        });
    }

    onSyncIntervalTextChange(text) {
        this.setState({
            syncInterval: text.trim(),
        });
    }

    onAutostartRecordingTextChange(text) {
        this.setState({
            autostartRecording: text.trim(),
        });
    }

    onLostConnTextChange(text) {
        this.setState({
            lostConnectionAction: text.trim(),
        });
    }

    onBtnSaveSettingsPressed() {
        saveCustomCameraMode(this.state.isCustomCamera);
        saveCustomVideoMode(this.state.isCustomVideo);

        saveBlurMode(this.state.isBlurMode);
        savePausableMode(this.state.pausableMode);
        if (this.state.videoWidth != null && this.state.videoWidth != '') {
            saveVideoWidth(parseFloat(this.state.videoWidth));
        }
        if (this.state.videoBitrate != null && this.state.videoBitrate != '') {
            saveVideoBitrate(parseFloat(this.state.videoBitrate));
        }
        if (this.state.audioSampleRate != null && this.state.audioSampleRate != '') {
            saveAudioSampleRate(parseFloat(this.state.audioSampleRate));
        }
        if (this.state.audioBitrate != null && this.state.audioBitrate != '') {
            saveAudioBitrate(parseFloat(this.state.audioBitrate));
        }
        if (this.state.videoHeight != null && this.state.videoHeight != '') {
            saveVideoHeight(parseFloat(this.state.videoHeight));
        }
        saveLiveStreamingEnabled(this.state.liveStreamingEnabled);
        if (this.state.autostartRecording != null && this.state.autostartRecording != '') {
            saveAutostartRecording(parseFloat(this.state.autostartRecording));
        }
        if (this.state.startDelay != null && this.state.startDelay != '') {
            saveStartDelay(parseFloat(this.state.startDelay));
        }
        saveCoverSelectorEnabled(this.state.coverSelectorEnabled);
        if (this.state.maxRecordingDuration != null && this.state.maxRecordingDuration != '') {
            saveMaxRecordingDuration(parseFloat(this.state.maxRecordingDuration));
        }
        saveSendImmediately(this.state.sendImmediately);
        if (this.state.camera != null && this.state.camera != '') {
            saveCamera(parseFloat(this.state.camera));
        }
        if (this.state.quality != null && this.state.quality != '') {
            saveQuality(parseFloat(this.state.quality));
        }

        saveUseWifiOnly(this.state.useWifiOnly);
        if (this.state.syncInterval != null && this.state.syncInterval != '') {
            saveSyncInterval(parseFloat(this.state.syncInterval));
        }
        if (this.state.lostConnectionAction != null && this.state.lostConnectionAction != '') {
            saveLostConnectionAction(parseFloat(this.state.lostConnectionAction));
        }
        saveTurnOffUploader(this.state.turnOffUploader);

        if (this.state.titleText != null && this.state.titleText != '') {
            saveTitleText(this.state.titleText);
        }
        if (this.state.mesText != null && this.state.mesText != '') {
            saveMesText(this.state.mesText);
        }
        if (this.state.posBtnText != null && this.state.posBtnText != '') {
            savePosBtnText(this.state.posBtnText);
        }
        if (this.state.negBtnText != null && this.state.negBtnText != '') {
            saveNegBtnText(this.state.negBtnText);
        }
        if (this.state.hidePlayerControls != null && this.state.hidePlayerControls != '') {
            saveHidePlayerControls(this.state.hidePlayerControls);
        }
        if (this.state.controllerStyle != null && this.state.controllerStyle != '') {
            saveControllerStyle(parseFloat(this.state.controllerStyle));
        }
        if (this.state.textColor != null && this.state.textColor != '') {
            saveTextColor(parseFloat(this.state.textColor));
        }
        if (this.state.unplayedColor != null && this.state.unplayedColor != '') {
            saveUnplayedColor(parseFloat(this.state.unplayedColor));
        }
        if (this.state.playedColor != null && this.state.playedColor != '') {
            savePlayedColor(parseFloat(this.state.playedColor));
        }
        if (this.state.bufferedColor != null && this.state.bufferedColor != '') {
            saveBufferedColor(parseFloat(this.state.bufferedColor));
        }
        if (this.state.tintColor != null && this.state.tintColor != '') {
            saveTintColor(parseFloat(this.state.tintColor));
        }
    }
}

const styles = StyleSheet.create({
    container: {height: '100%', justifyContent: 'space-between'},
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Theme.size.commonMargin,
        marginRight: Theme.size.commonMargin,
        marginLeft: Theme.size.commonMargin,
    },
    btnSaveSettings: {
        marginRight: Theme.size.commonMargin,
        marginLeft: Theme.size.commonMargin,
        marginBottom: Theme.size.commonMargin,
        backgroundColor: Theme.colors.primary,
        height: Theme.size.btnQrHeight,
    },
});
