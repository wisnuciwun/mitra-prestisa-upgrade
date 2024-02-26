import React, { createElement, useEffect } from "react";
import { View } from "react-native";

export const RowTabsWithChildTab = ({
  showSubTab,
  subMenu,
  data,
  spacerIfNotFullRow,
  tabItem,
}) => {
  return (
    <>
      <View
        style={{
          // backgroundColor: 'green',
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {React.createElement(tabItem)}
        {data.length == 2 && data.length < 5 && (
          <>
            <View style={{ width: spacerIfNotFullRow }} />
            <View style={{ width: spacerIfNotFullRow }} />
          </>
        )}
        {data.length === 3 && data.length < 5 && (
          <View style={{ width: spacerIfNotFullRow }} />
        )}
      </View>
      <View style={{ height: 10 }} />
      {showSubTab && createElement(subMenu)}
    </>
  );
};
