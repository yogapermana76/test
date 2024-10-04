/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const border = {
  tiny: 4,
  extraSmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 24,
} as const

export type Border = keyof typeof border
