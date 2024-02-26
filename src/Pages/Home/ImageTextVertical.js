import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Colors, Fonts } from "../../Theme/Variables";
import { Utils } from "../../Utils";

export const ImageTextVertical = ({
  item,
  sizeImage = 68 - 12,
  sizeImageContainer = 68 - 10,
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          {
            height: sizeImageContainer - 12,
            width: sizeImageContainer - 12,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.white,
            borderRadius: 14,
            elevation: 6, // @platformandroid
          },
          Utils.shadowBg.v1,
        ]}
      >
        <FastImage
          source={{ uri: item.icon.replace("http://", "https://") }}
          style={{ height: sizeImage, width: sizeImage }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          marginTop: 8,
          fontFamily: Fonts.regular,
          fontSize: 12,
          color: Colors.neutralBlack02,
          textAlign: "center",
          textTransform: "capitalize",
          width: sizeImageContainer,
          paddingVertical: 5,
          lineHeight: 16,
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          height: 2,
          backgroundColor: "transparent",
          marginHorizontal: 6,
        }}
      />
    </View>
  );
};
