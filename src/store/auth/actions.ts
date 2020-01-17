import history from 'history.js';
import { SIGNIN_WITH_KAKAO, UPDATE_PROFILE } from 'store/auth/types';
import { SAMPLE_ACTION_TYPE } from 'store/types';
import axios from 'axios';
import keys from 'config/keys';

function authorizedApiServer(userToken: string) {
  return axios.create({
    baseURL: `${keys.baseAPIURL}/api`,
    headers: { Authorization: userToken },
  });
}

export const signinWithKakao = () => async (dispatch: any) => {
  dispatch({ type: SIGNIN_WITH_KAKAO });
  history.push('/onboarding')
}

export const updateProfile = () => async (dispatch: any) => {
  dispatch({ type: UPDATE_PROFILE });
  history.push('/')
}

export const actionName = (formValues: { name: string }) => async (dispatch: any, getState: any) => {
  const { userToken } = getState().auth;
  const formData = new FormData();
  formData.append('item', formValues.name);

  const response = await authorizedApiServer(userToken).post('/', formData);
  if (!response.data.error) {
    dispatch({ type: SAMPLE_ACTION_TYPE, payload: response.data });
  } else {
    // error
    dispatch({ type: SAMPLE_ACTION_TYPE, payload: response.data.error });
  }
  history.push('/');
};

export const actionName2 = () => async (dispatch: any) => {
  dispatch({ type: SAMPLE_ACTION_TYPE });
};
