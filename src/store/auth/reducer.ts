import {
  SIGNIN_WITH_KAKAO,
  UPDATE_PROFILE,
  SIGNOUT
} from 'store/auth/types';

const INITIAL_STATE = {
  isSignedIn: false,
  profile: {}
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNIN_WITH_KAKAO:
      return {
        ...state,
        isSignedIn: true,
        profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          nickname: action.payload,
        }
      }
    case SIGNOUT:
      return {
        ...state,
        profile: {},
        isSignedIn: false,
      }
    default:
      return state;
  }
};
