import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
      case PROFILE_ERROR:
        return {
          ...state,
          profile: null
        };
      default:
        return state;
    }
  }