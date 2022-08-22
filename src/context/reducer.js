import { ACTIVE, COMPLETED, INPUTDATA, CANCELPAYMENT } from "./types";

export const Reducers = (state, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        active: action.payload,
      };

    case COMPLETED:
      return {
        ...state,
        completed: action.payload,
      };

    case INPUTDATA:
      const payload = action.payload;
      return {
        ...state,
        dataInputs: { ...state.dataInputs, ...payload },
      };
    case CANCELPAYMENT:
      return {
        ...state,
        dataInputs: {
          name: "",
          emailaddress: "",
          address1: "",
          address2: "",
          localgovernment: "",
          state: "",
          nameoncard: "",
          cardyype: "",
          carddetails: "",
          expirydate: "",
          cvv: "",
        },
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
