import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import AlbumList from "./AlbumList";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headTextStyle,
    headContentStyle,
    thumbnailContainerStyle,
    coverImageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headContentStyle}>
          <Text style={headTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={coverImageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headContentStyle: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
  headTextStyle: {
    fontSize: 18,
    color: "black"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  coverImageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};
export default AlbumDetail;
