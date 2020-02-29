import {StoreType} from '../redux/store';
import NetworkClient from '../services/nw/client';

class UseCases {
  storeRef: {
    dispatch: (data:any) => void,
    getState: () => StoreType,
  };
  apiInstance: NetworkClient;
  initialize(store: any, host: string) {
    this.storeRef = store;
    this.apiInstance = new NetworkClient(host);
  }
}

const UseCasesRef = new UseCases();

export default UseCasesRef;