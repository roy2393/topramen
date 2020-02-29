import {RamenStateType, RamenProps} from '../../redux/actions/types';

export const addRamens = (state: RamenStateType, ramens: RamenProps[]) => {
  const {ramenCollection} = state;
  ramenCollection.addRamens(ramens);

  return {...state};
};
