import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import App from './App';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'violet',
      secondary: 'yellow',
    },
  };

export default function Main() {
  return (
    <PaperProvider theme ={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

