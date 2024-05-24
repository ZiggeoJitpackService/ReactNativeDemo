import { createDrawerNavigator } from '@react-navigation/drawer';
import Recordings from '../recordings/Recordings';
import { VideoEditor } from '../VideoEditor';
import { CommonSettings } from '../settings/CommonSettings';
import { Sdks } from '../Sdks';
import { TopClients } from '../TopClients';
import { ContactUs } from '../ContactUs';
import { About } from '../About';
import { Logs } from '../logs/Logs';
import DrawerMenu from './DrawerMenu';
import React from 'react';
import { CustomRecorder } from '../CustomRecorder';
import { CustomVideoPlayer } from '../CustomVideoPlayer';

const Drawer = createDrawerNavigator();

export function MainDrawer(props) {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name="Recordings" component={Recordings} />
            <Drawer.Screen name="CustomRecorder" component={CustomRecorder} />
            <Drawer.Screen name="CustomVideoPlayer" component={CustomVideoPlayer} />
            <Drawer.Screen name="VideoEditor" component={VideoEditor} />
            <Drawer.Screen name="ListSdks" component={Sdks} />
            <Drawer.Screen name="ListClients" component={TopClients} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Logs" component={Logs} />
        </Drawer.Navigator>
    );
}
