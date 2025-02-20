import * as React from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"
const Players = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#100329"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M25.5 31.5v-3a6 6 0 0 0-6-6h-12a6 6 0 0 0-6 6v3m33 0v-3a6 6 0 0 0-4.5-5.805m-6-18a6 6 0 0 1 0 11.625m-4.5-5.82a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Players
