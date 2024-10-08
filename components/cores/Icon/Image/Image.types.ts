export type IconImageType = keyof typeof iconRegistry;

export interface IconImageProps {
  preset: 'image';
  name: IconImageType;
}

export const iconRegistry = {
  ['google']: require('@/assets/icons/google.png'),
  ['apple']: require('@/assets/icons/apple.png'),
  ['facebook']: require('@/assets/icons/facebook.png'),
  ['check']: require('@/assets/icons/check.png'),
};
