import history from 'history.js';
import { CREATE_CHATROOM } from 'store/chat/types';
import axios from 'axios';
import keys from 'config/keys';

function authorizedApiServer(userToken: string) {
  return axios.create({
    baseURL: `${keys.baseAPIURL}/api`,
    headers: { Authorization: userToken },
  });
}

export const createChatroom = (name: string) => async (dispatch: any) => {
  // get roomId as response from server and push to route & payload
  dispatch({ type: CREATE_CHATROOM, payload: name });
  history.push('/chatroom/temp')
}
