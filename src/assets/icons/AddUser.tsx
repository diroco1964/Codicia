import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';


const AddUser = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.333 17.5v-1.667A3.333 3.333 0 0 0 10 12.5H4.167a3.333 3.333 0 0 0-3.334 3.333V17.5M16.667 6.667v5m2.5-2.5h-5m-3.75-3.334a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AddUser;
