import { Navigation } from 'react-native-navigation';
import Home from "../containers/home/Home";
import SetupStations from "../containers/setup-stations/SetupStations";

export const SCREENS_MAP = {
    Home: { screen: Home, name : "Home" },
    SetupStations : {screen : SetupStations, name : "SetupStations"}
};

export const registerScreens = (store, Provider) => {

    for (let screenKey in SCREENS_MAP) {
        if (SCREENS_MAP.hasOwnProperty(screenKey)) {
            let screenConfig = SCREENS_MAP[screenKey];
            Navigation.registerComponent(screenConfig.name, () => screenConfig.screen, store, Provider);
        }
    }
};