import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { AuthenticationStoreModel } from './AuthenticationStore'; // @demo remove-current-line
import { ThemeStoreModel } from './ThemeStore';

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore', {
  authenticationStore: types.optional(AuthenticationStoreModel, {}), // @demo remove-current-line
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
