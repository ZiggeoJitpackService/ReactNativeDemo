import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Splash from './screens/Splash';
import About from './screens/About';
import AvailableSDKs from './screens/AvailableSDKs';
import VideoEdit from './screens/VideoEdit';
import TopClients from './screens/TopClients';
import ContactUs from './screens/ContactUs';
import Auth from './screens/Auth';
import RecordingDetails from './screens/recordings/RecordingDetails';
import Recordings from './screens/recordings/Recordings';

//TODO old screens, should be removed before release
import AuthWelcome from './screens/old/Auth/AuthWelcome';
import AuthLogin from './screens/old/Auth/AuthLogin';
import Browse from './screens/old/Browse';
import Explore from './screens/old/Explore';
import Library from './screens/old/Library';
import Settings from './screens/old/Settings';
import MoviesListScreen from './screens/old/Movie/MoviesListScreen';
import MovieDetailsScreen from './screens/old/Movie/MovieDetailsScreen';

import NavbarWrapper from './components/NavbarWrapper';
import NavbarButtonWrapper from './components/NavbarButtonWrapper';
import Header from './components/Header';
import {getNavbarBrowseIcon, getNavbarExploreIcon, getNavbarLibraryIcon} from './utils/icons';
import {getFontStyleObject} from './utils/font';
import {fromRightWithFade} from './utils/navigation';
import RouteNames from './RouteNames';
import Theme from './Theme';

const TabNames = {
    browse: 'Browse',
    explore: 'Explore',
    library: 'Library',
};

const defaultHeaderObject = {
    header: props => <Header scene={props.scene}/>,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
    createStackNavigator(screensObject, {
        defaultNavigationOptions: {...defaultHeaderObject},
        cardStyle: {
            backgroundColor: '#000',
        },
        headerMode: 'screen',
        transitionConfig: () => fromRightWithFade(),
        ...customOptions,
    });

// Navigation
const BottomTabs = createBottomTabNavigator(
    {
        [TabNames.browse]: {
            screen: createDefaultStackNavigator({
                Browse,
                [RouteNames.MovieListScreen]: MoviesListScreen,
                [RouteNames.MovieDetailsScreen]: MovieDetailsScreen,
            }),
        },
        [TabNames.explore]: {
            screen: createDefaultStackNavigator({Explore}),
        },
        [TabNames.library]: {
            screen: createDefaultStackNavigator({
                Library,
                [RouteNames.Settings]: Settings,
                [RouteNames.MovieListScreen]: MoviesListScreen,
                [RouteNames.MovieDetailsScreen]: MovieDetailsScreen,
            }),
        },
    },
    {
        tabBarOptions: {
            activeBackgroundColor: Theme.colors.bottomNavbar,
            inactiveBackgroundColor: Theme.colors.bottomNavbar,
            activeTintColor: Theme.gray.lightest,
            inactiveTintColor: Theme.gray.light,
            labelStyle: {...getFontStyleObject()},
            style: {
                borderTopColor: Theme.colors.bottomNavbar,
                height: Theme.specifications.bottomNavbarHeight,
                backgroundColor: Theme.colors.bottomNavbar,
            },
        },
        defaultNavigationOptions: ({navigation}) => ({
            lazy: false,
            tabBarIcon: ({tintColor}) => {
                const {routeName} = navigation.state;
                switch (routeName) {
                    case TabNames.browse:
                        return getNavbarBrowseIcon({tintColor});
                    case TabNames.explore:
                        return getNavbarExploreIcon({tintColor});
                    case TabNames.library:
                        return getNavbarLibraryIcon({tintColor});
                    default:
                        return null;
                }
            },
            tabBarComponent: NavbarWrapper,
            tabBarButtonComponent: NavbarButtonWrapper,
            tabBarOnPress: ({navigation, defaultHandler}) => {
                navigation.dispatch(StackActions.popToTop());
                defaultHandler();
            },
        }),
    },
);

const AuthStack = createDefaultStackNavigator({
    [RouteNames.AuthWelcome]: {screen: AuthWelcome},
    [RouteNames.AuthLogin]: {screen: AuthLogin},
});

const HomeStack = createStackNavigator(
    {[RouteNames.BottomTabs]: {screen: BottomTabs}},
    {defaultNavigationOptions: () => ({header: null})},
);

export const RootStack = createAppContainer(
    createSwitchNavigator({
        [RouteNames.Splash]: {screen: Splash},
        [RouteNames.AuthStack]: {screen: AuthStack},
        [RouteNames.HomeStack]: {screen: HomeStack},
    }),
);