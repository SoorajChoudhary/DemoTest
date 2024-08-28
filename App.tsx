import { Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "@src/routes/MainStack";
import { Provider } from "react-redux";
import { persistor, store } from "@src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
