import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { registerScreens } from "./containers/screens";
import { initializeServices } from "./services/";
import { SCREENS_MAP } from "./containers/screens";
import { store } from "./redux/configureStore";

export const startApp = () => {
    
    registerScreens(store, Provider);
    initializeServices();

    Navigation.startSingleScreenApp({
        screen: {
            screen: SCREENS_MAP.Home.name
        },
        drawer: {
            left: {
              screen: SCREENS_MAP.Drawer.name,
            },
            animationType: 'slide'
          },        
        animationType: 'fade'
    });
}

