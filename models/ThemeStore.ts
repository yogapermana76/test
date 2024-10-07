import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withSetPropAction } from './helpers/withSetPropAction';
import { colors, ThemeVariant } from '@/theme';

export const ThemeStoreModel = types
  .model('ThemeStore')
  .props({
    theme: types.enumeration<ThemeVariant>(
      Object.keys(colors) as ThemeVariant[]
    ),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    setTheme(theme: keyof typeof colors) {
      store.setProp('theme', theme);
    },
  }));

export interface ThemeStore extends Instance<typeof ThemeStoreModel> {}
export interface ThemeStoreSnapshot
  extends SnapshotOut<typeof ThemeStoreModel> {}
