import { saveString } from '@/utils/storage';
import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withSetPropAction } from './helpers/withSetPropAction';

export const AuthStoreModel = types
  .model('AuthStore')
  .props({
    authToken: types.maybe(types.string),
    authEmail: '',
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken;
    },
    get validationError() {
      if (store.authEmail.length === 0) {
        return "can't be blank";
      }
      if (store.authEmail.length < 6) {
        return 'must be at least 6 characters';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail)) {
        return 'must be a valid email address';
      }
      return '';
    },
  }))
  .actions(withSetPropAction)
  .actions((store) => ({
    login(token: string) {
      saveString('authToken', token);
      store.setProp('authToken', token);
    },
    setAuthToken(value?: string) {
      store.authToken = value;
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, '');
    },
    logout() {
      store.authToken = undefined;
      store.authEmail = '';
    },
  }));

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}
