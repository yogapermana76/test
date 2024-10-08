import Svg, { Path, SvgProps } from "react-native-svg"
import { withIconLayout } from "../Icon.component"

interface IconProps extends SvgProps {
  size?: number
  color2?: string
}

export const Sport = withIconLayout<IconProps>((props: IconProps) => {
  const { size = 24, color = "#FD7B17", color2 = "#fff" } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill={color}
      />
      <Path
        d="M6.351 6.936a.76.76 0 011.097 0A7.973 7.973 0 019.66 11.7h1.64V5.34c0-.454.345-.84.8-.84.454 0 .8.386.8.84v6.36h1.64a7.973 7.973 0 012.211-4.764.76.76 0 011.097 0c.33.341.264.88-.058 1.23a6.378 6.378 0 00-1.64 3.534h3.109c.455 0 .84.345.84.8 0 .455-.385.8-.84.8h-3.11a6.378 6.378 0 001.641 3.534c.322.35.388.889.058 1.23a.76.76 0 01-1.097 0A7.973 7.973 0 0114.54 13.3H12.9v6.36c0 .454-.345.84-.8.84-.454 0-.8-.386-.8-.84V13.3H9.66a7.973 7.973 0 01-2.212 4.764.76.76 0 01-1.097 0c-.33-.341-.264-.88.058-1.23A6.377 6.377 0 008.05 13.3H4.94c-.454 0-.84-.345-.84-.8 0-.455.386-.8.84-.8h3.11a6.377 6.377 0 00-1.64-3.534c-.323-.35-.39-.889-.059-1.23z"
        fill={color2}
      />
    </Svg>
  )
})
