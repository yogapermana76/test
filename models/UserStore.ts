import { IUser } from '@/services/user';
import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withSetPropAction } from './helpers/withSetPropAction';

export const UserStoreModel = types
  .model('UserStore')
  .props({
    user: types.maybe(types.frozen<IUser>()),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    clear() {
      store.setProp('user', undefined);
    },

    setUser(user: IUser) {
      store.setProp('user', user);
    },
  }));

export interface UserStore extends Instance<typeof UserStoreModel> {}
export interface UserStoreSnapshot extends SnapshotOut<typeof UserStoreModel> {}
