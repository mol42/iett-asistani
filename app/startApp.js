import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { registerScreens } from "./containers/screens";
import { SCREENS_MAP } from "./containers/screens";
import { store } from "./redux/configureStore";

registerScreens(store, Provider);

export const startApp = () => {

    Navigation.startSingleScreenApp({
        screen: {
            screen: SCREENS_MAP.Home.name
        },
        animationType: 'fade'
    });
}

