import Svg, { Path, SvgProps } from "react-native-svg"
import { withIconLayout } from "../Icon.component"

interface IconProps extends SvgProps {
  size?: number
  color2?: string
}

export const Building = withIconLayout<IconProps>((props: IconProps) => {
  const { size = 24, color = "#FD7B17", color2 = "#fff" } = props
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M22 15.05v4.45a2.5 2.5 0 01-2.5 2.5h-7V10.42l.47.1 4.04.9.48.11 2.04.46c.49.1.94.27 1.33.52 0 .01.01.01.01.01.1.07.2.15.29.24.46.46.76 1.13.83 2.11 0 .06.01.12.01.18zM12.5 7.41V22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.96-3.81 4.35-2.64l4.43 2.19c.96.47 1.75 1.72 1.75 2.77z"
        fill={color}
      />
      <Path
        d="M8.97 9.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 110 1.5zM16.22 17.5h-1.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.47a.749.749 0 110 1.5zM20.22 17.5h-1.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.47a.749.749 0 110 1.5zM8.97 13.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 110 1.5z"
        fill={color2}
      />
    </Svg>
  )
})
