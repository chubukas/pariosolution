import { ACTIVE } from "./types";

export const Reducers = (state, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        active: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
