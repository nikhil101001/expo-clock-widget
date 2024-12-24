import { registerRootComponent } from "expo";
import "expo-dev-client";
import { registerWidgetTaskHandler } from "react-native-android-widget";
import { widgetTaskHandler } from "./components/widget-task-handler";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);
