const default_dark = () => {
  const Colors = {
    primary: "lightblue",
    text: "white",
    inputBackground: "gray",
  };

  const NavigationColors = {
    primary: Colors.primary,
  };

  return {
    Images: {
      logo: {
        uri: "https://thecodingmachine.github.io/react-native-prestisa/img/TOM-small.png",
      },
    },
    Variables: {
      Colors,
      NavigationColors,
    },
  };
};

export default {
  default_dark,
};
