import React from "react";
import { Appbar, withTheme } from "react-native-paper";

type HeaderProps = {
  scene: any;
  previous: any;
  navigation: any;
  theme: any;
};

const Header: React.FC<HeaderProps> = ({
  scene,
  previous,
  navigation,
  theme,
}) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header theme={{ colors: { primary: "#fff" } }}>
      {previous && (
        <Appbar.BackAction
          onPress={() => navigation.navigate(previous.route.name)}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default withTheme(Header);
