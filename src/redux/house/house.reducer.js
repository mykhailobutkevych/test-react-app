import * as Actions from "./house.actions";

const initialState = {
  houses: [],
  house: null,
  triggerGetHouses: false,
};

const house = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_HOUSES: {
      return {
        ...state,
        houses: action.payload.houses,
      };
    }
    case Actions.GET_HOUSE: {
      return {
        ...state,
        house: action.payload,
      };
    }
    case Actions.TRIGGER_GET_HOUSES: {
      return {
        ...state,
        triggerGetHouses: !state.triggerGetHouses,
      };
    }
    default: {
      return state;
    }
  }
};

export default house;
