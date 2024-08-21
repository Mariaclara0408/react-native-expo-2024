import { processFontFamily, useFonts } from 'expo-font';
import { createContext, useContext } from'react';
import { Text, View } from'react-native';
import { ActivityIndicator } from 'react-native'; 

const FontContext = createContext({})

export function FontProvider({ children }) {

  const [loaded, error] = useFont({
    regular: require("../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    italic: require("../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
  });
  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 28, marginTop: 15}}>
          Carregando fontes...
          </Text>
      </View>
    );
  }
return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('FontProvider must be used within a FontProvider');
  }
  return context;
}