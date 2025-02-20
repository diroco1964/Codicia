import * as React from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"
const Rules = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#100329"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M11.5 2.5v27m-6-27h21a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3h-21a3 3 0 0 1-3-3v-21a3 3 0 0 1 3-3Z"
    />
  </Svg>
)
export default Rules