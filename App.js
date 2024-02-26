import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import { ThemeProvider, createTheme } from "@rneui/themed";
import FlipperAsyncStorage from "rn-flipper-async-storage-advanced";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./src/Store";
import { ToastDanger, ToastSuccess } from "./src/Components/Base";
import { Colors } from "./src/Theme/Variables";
import ApplicationNavigator from "./src/Navigators/Application";
import { Provider } from "react-redux";

const theme = createTheme({
  Button: {
    buttonStyle: {
      height: 48,
      backgroundColor: Colors.primary,
      borderRadius: 5,
    },
    titleStyle: { fontSize: 16, fontWeight: "500" },
  },
  Input: {
    containerStyle: { paddingHorizontal: 0, marginTop: 10 },
    inputStyle: { fontSize: 14, paddingHorizontal: 15 },
    inputContainerStyle: {
      borderWidth: 1,
      borderRadius: 5,
    },
    renderErrorMessage: false,
  },
});

export default function App() {
  return (
    <ToastProvider
      renderType={{
        custom_danger: (toast) => <ToastDanger toast={toast} />,
        custom_success: (toast) => <ToastSuccess toast={toast} />,
      }}
    >
      <ThemeProvider theme={theme}>
        <FlipperAsyncStorage />
        <Provider store={store}>
          <StatusBar backgroundColor="white" barStyle="light-content" />
          <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ToastProvider>
  );
}
