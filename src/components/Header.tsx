import React from "react";
import { Appbar } from "react-native-paper";

type HeaderProps = {
  scene: any;
  previous: any;
  navigation: any;
};

const Header: React.FC<HeaderProps> = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header>
      {previous && (
        <Appbar.BackAction
          onPress={() => navigation.navigate(previous.route.name)}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
