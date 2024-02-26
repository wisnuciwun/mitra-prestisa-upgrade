import React from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { CarouselView } from "../../Components/Custom";
import { setLocationFirst } from "../../Store/locationSlice";
import { useTheme } from "../../Hooks";

const IntroductionContainer = (props) => {
  const { Layout } = useTheme();
  const dispatch = useDispatch();

  const handleFinishIntro = async () => {
    try {
      await AsyncStorage.setItem("@skip_intro", "true");
      dispatch(setLocationFirst(false));
      props.navigation.replace("Auth");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={[Layout.fill, styles.screen]}>
      <CarouselView handleFinish={handleFinishIntro} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { backgroundColor: "white" },
});

export default IntroductionContainer;
