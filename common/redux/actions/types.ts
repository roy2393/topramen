import RamenCollection from "../../entities/RamenCollection";

export const Actions = {
  ADD_RAMENS:  'ADD_RAMENS',
}

export type ActionType = {
  type: string;
  payload: any;
}


export type RamenProps = {
  Brand: string;
  Variety: string;
  Country: string;
  Stars: number;
  "Top Ten": string;
}

export type RamenStateType = {
  ramenCollection: RamenCollection,
};