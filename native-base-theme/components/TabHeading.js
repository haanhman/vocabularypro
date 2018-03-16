import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: "column",
    backgroundColor: "#e8f2f4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    ".scrollable": {
      paddingHorizontal: 20,
      flex: platform === "android" ? 0 : 1,
      minWidth: platform === "android" ? undefined : 60
    },
    "NativeBase.Text": {
      color: "black",
      fontWeight: "bold",
      marginHorizontal: 7
    },
    "NativeBase.Icon": {
      color: variables.topTabBarTextColor,
      fontSize: platform === "ios" ? 26 : undefined
    },
    ".active": {
      "NativeBase.Text": {
        color: "#1c9ff3",
        fontWeight: "bold"
      },
      "NativeBase.Icon": {
        color: "#1c9ff3",
      }
    }
  };

  return tabHeadingTheme;
};
