import refs from '../index';
import {addRamensAction} from '../../redux/actions';
import {RamenProps} from '../../redux/actions/types';

async function getRamens() {
  refs.apiInstance
    .getRamens()
    .then((data: any) => {
      refs.storeRef.dispatch(addRamensAction(data));
    })
    .catch(err => {});
}

export default getRamens;
