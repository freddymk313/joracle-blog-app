import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {Image } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => (
              <Image
                source={require('../assets/logo/joracle-logo.png')}
                style={{ width: 180, height: 80, resizeMode: 'contain' }}
              />
            ),
            headerTitleAlign: 'center',
             headerStyle: {
              paddingTop: 80,       
              paddingBottom: 80,    
              height: 160,          
            },
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
