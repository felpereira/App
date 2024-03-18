import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function Menu(props) {
  return (
    <Svg
      width={48}
      height={41}
      viewBox="0 0 48 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect y={0.5} width={48} height={8} rx={4} fill="#fff" />
      <Rect y={16.5} width={48} height={8} rx={4} fill="#fff" />
      <Rect y={32.5} width={48} height={8} rx={4} fill="#fff" />
    </Svg>
  );
}

export default Menu;
