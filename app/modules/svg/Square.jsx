import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Square(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 1.5A1.5 1.5 0 0122.5 3v18a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 21V3A1.5 1.5 0 013 1.5h18zM3 0a3 3 0 00-3 3v18a3 3 0 003 3h18a3 3 0 003-3V3a3 3 0 00-3-3H3z"
        fill="#fff"
      />
      <Path
        d="M12 6a.75.75 0 01.75.75v4.5h4.5a.75.75 0 110 1.5h-4.5v4.5a.75.75 0 11-1.5 0v-4.5h-4.5a.75.75 0 110-1.5h4.5v-4.5A.75.75 0 0112 6z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Square;
