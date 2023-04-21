import React, { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import HomeStack from './routes/HomeStack';
import AboutStack from './routes/AboutStack';
import RootDrawerNavigator from './routes/Drawer';

const getFonts = () => Font.loadAsync({ 
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'), 
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
}); 

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  
 return <RootDrawerNavigator />
}