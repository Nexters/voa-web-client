import {
  SIGNIN_WITH_KAKAO,
  UPDATE_PROFILE,
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
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          name: 'placeholder'
        }
      }
    default:
      return state;
  }
};
