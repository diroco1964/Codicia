import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Ranking = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#100329"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m17 2 4.635 9.39L32 12.905l-7.5 7.305 1.77 10.32L17 25.655 7.73 30.53 9.5 20.21 2 12.905l10.365-1.515L17 2Z"
    />
  </Svg>
)
export default Ranking