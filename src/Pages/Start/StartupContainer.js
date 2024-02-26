import React, { useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import messaging from "@react-native-firebase/messaging";
import { useTheme } from "../../Hooks";
import { Brand } from "../../Components/Custom";
import { setDefaultTheme } from "../../Store/themeSlice";
import { Colors } from "../../Theme/Variables";
import { setRawCatData } from "../../Store/categorySlice";
import { setFcmToken } from "../../Store/tokenSlice";

const StartupContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts } = useTheme();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const checkToken = async () => {
    const fcmToken = await messaging().getToken();

    if (fcmToken) {
      await AsyncStorage.setItem("@fcm_token", fcmToken);
      dispatch(setFcmToken(fcmToken));
    }
  };

  const setCategory = () => {
    dispatch(setRawCatData(dataHome));
  };

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        AsyncStorage.getItem("@skip_intro").then((intro_value) => {
          if (intro_value === "true") {
            AsyncStorage.getItem("@login").then((login_value) => {
              if (
                state.guest.data.isGuest == false ||
                state.guest.data.isGuest == undefined
              ) {
                // console.log('BEFORE_IF')
                if (login_value === "true") {
                  navigation.replace("Main");
                  // console.log('TO_MAIN')
                } else {
                  navigation.replace("Auth");
                }
              } else {
                navigation.replace("Main");
                // console.log('MAIN_AS_GUESTT')
              }
            });
          } else {
            navigation.replace("Introduction");
          }
        });

        // navigateAndSimpleReset('Introduction')

        resolve(true);
      }, 3000)
    );
    setDefaultTheme({ theme: "default", darkMode: null });
  };

  useEffect(() => {
    setCategory();
    checkToken();
  }, []);

  const skipto = (screen, params) => {
    navigation.navigate(screen, params);
  };

  useEffect(() => {
    init();
    // skipto('UnderConstruction', {})
  });

  return (
    <>
      <SafeAreaView style={[Layout.fill, Layout.colCenter, styles.screen]}>
        <Brand tipe="white" width={230} height={100} />
      </SafeAreaView>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
  },
});

export default StartupContainer;

dataHome = {
  category: [
    {
      id: 1,
      name: "karangan bunga",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_bunga.png",
      subcategory: [],
    },
    {
      id: 2,
      name: "parcel",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_parcel.png",
      subcategory: [],
    },
    {
      id: 3,
      name: "cake",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_cake.png",
      subcategory: [],
    },
    {
      id: 4,
      name: "catering",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_catering.png",
      subcategory: [],
    },
    {
      id: 5,
      name: "plant",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_plant.png",
      subcategory: [],
    },
    {
      id: 6,
      name: "decoration",
      icon: "https://lavender.prestisa.id/assets/images/customer_app/icon/main_decoration.png",
      subcategory: [],
    },
  ],
};
