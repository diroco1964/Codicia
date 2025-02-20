import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Github = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      stroke="#100329"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M12.5 28.5C5 30.75 5 24.75 2 24m21 9v-5.805a5.054 5.054 0 0 0-1.41-3.915c4.71-.525 9.66-2.31 9.66-10.5A8.16 8.16 0 0 0 29 7.155a7.605 7.605 0 0 0-.135-5.655S27.095.975 23 3.72a20.07 20.07 0 0 0-10.5 0C8.405.975 6.635 1.5 6.635 1.5A7.605 7.605 0 0 0 6.5 7.155a8.16 8.16 0 0 0-2.25 5.67c0 8.13 4.95 9.915 9.66 10.5a5.055 5.055 0 0 0-1.41 3.87V33"
    />
  </Svg>
)
export default Github