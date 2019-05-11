//import libraries to make component
import React from "react";
import { Text, View } from "react-native";

// Make a component

export default (Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
});

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    elevation: 5,
    position: "relative"
  }
};

//Make the component available to other parts of the app
