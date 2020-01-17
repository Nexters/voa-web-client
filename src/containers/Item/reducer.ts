import {
    SAMPLE_ACTION_TYPE,
  } from 'store/types';
  
  const INITIAL_STATE = {
    isSignedIn: false,
  };
  
  export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case SAMPLE_ACTION_TYPE:
        return {
          ...state,
          isSignedIn: true,
        };
      default:
        return state;
    }
  };
  