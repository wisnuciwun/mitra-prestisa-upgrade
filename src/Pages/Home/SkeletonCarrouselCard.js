import React from "react";
import { ScrollView, View } from "react-native";
import { Utils } from "../../Utils";
import { SkeletonCard } from "../../Components/Custom";

export const SkeletonCarrouselCard = ({ marginHorizontal = 24 }) => {
  return (
    <View style={[Utils.shadowBg.v1, { flexDirection: "row" }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(4)].map((item, index) => (
          <SkeletonCard index={index} marginH={marginHorizontal} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
