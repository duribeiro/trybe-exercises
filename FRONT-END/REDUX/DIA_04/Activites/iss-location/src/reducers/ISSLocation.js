import { RECEIVE_ISS_LOCATION } from "../actions";

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
}

const ISSLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_ISS_LOCATION:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      }
    default:
      return state;
  }
}

export default ISSLocation;
