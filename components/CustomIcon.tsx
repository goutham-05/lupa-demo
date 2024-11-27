// CustomIcon.tsx
import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type CustomIconProps = {
  icon: IconProp;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  size = 16,
  color = "#D53F8C",
  style
}) => {
  return (
    <View style={style}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;
