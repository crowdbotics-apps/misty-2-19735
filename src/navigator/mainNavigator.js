import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93196Navigator from '../features/Settings93196/navigator';
import Settings93181Navigator from '../features/Settings93181/navigator';
import NotificationList93180Navigator from '../features/NotificationList93180/navigator';
import Maps93179Navigator from '../features/Maps93179/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings93196: { screen: Settings93196Navigator },
Settings93181: { screen: Settings93181Navigator },
NotificationList93180: { screen: NotificationList93180Navigator },
Maps93179: { screen: Maps93179Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
