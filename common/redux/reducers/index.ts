import {Actions, ActionType, RamenStateType} from '../actions/types';
import RamenCollection from '../../entities/RamenCollection';
import {addRamens} from '../../usecases/reduce/ramenReduceUC';

function getDefaultState(): RamenStateType {
  return {
    ramenCollection: new RamenCollection(),
  };
}
export default function ramenReducer(
  state: RamenStateType = getDefaultState(),
  action: ActionType,
) {
  switch (action.type) {
    case Actions.ADD_RAMENS:
      return addRamens(state, action.payload);
    default:
      return state;
  }
}
