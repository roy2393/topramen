import {Actions, RamenProps} from './types';

export const addRamensAction = (ramens: RamenProps[]) => {
  return {
    type: Actions.ADD_RAMENS,
    payload: ramens,
  };
};
