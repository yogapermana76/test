import { ViewStyle } from "react-native/types"
import { colors } from "./colors"

export type ShadowSizeType = "small" | "medium" | "large"

export type ContainerShadowType = Record<ShadowSizeType, ViewStyle>

export const shadowStyle: ContainerShadowType = {
  large: {
    elevation: 2,
    shadowColor: colors.default.palette.neutral[700],
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
  },
  medium: {
    elevation: 2,
    shadowColor: colors.default.palette.neutral[700],
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
  },
  small: {
    elevation: 2,
    shadowColor: colors.default.palette.neutral[700],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
}
