import {
    CREATE_CHATROOM
  } from 'store/chat/types';
  
  const INITIAL_STATE = {
  };
  
  export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case CREATE_CHATROOM:
        return {
          ...state,
          room: action.payload
        };
      default:
        return state;
    }
  };
  