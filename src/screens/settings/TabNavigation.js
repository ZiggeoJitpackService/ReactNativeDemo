import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Common" component={CommonSetting} />
            <Tab.Screen name="Recorder" component={CommonSetting} />
            <Tab.Screen name="Player" component={CommonSetting} />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
