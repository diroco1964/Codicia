import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider,configureFonts} from 'react-native-paper';
import App from './src/App';

const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Roboto-Black',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  }
};


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'violet',
      secondary: 'yellow',
    },
    
    fonts: configureFonts({config: fontConfig}),
    
  };

export default function Main() {
  return (
    <PaperProvider theme ={theme}>
      <App />
    </PaperProvider>
  );
}



AppRegistry.registerComponent(appName, () => Main);

