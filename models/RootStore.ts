import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { AuthStoreModel } from './AuthStore';
import { ThemeStoreModel } from './ThemeStore';
import { UserStoreModel } from './UserStore';

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore', {
  authStore: types.optional(AuthStoreModel, {}),
  userStore: types.optional(UserStoreModel, {}),
  themeStore: types.optional(ThemeStoreModel, { theme: 'default' }),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
