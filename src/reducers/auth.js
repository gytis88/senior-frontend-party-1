/**
 * Auth page reducer
 */
import { fromJS } from 'immutable';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '../actions/types';

import { LOCAL_STORE_TOKEN_KEY } from '../constants/auth';

const initialState = fromJS({
  token: localStorage.getItem(LOCAL_STORE_TOKEN_KEY),
  loading: false,
  error: null,
});

function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state
        .set('loading', false)
        .set('token', action.token);
    case AUTH_LOGIN_REQUEST:
      return state
        .set('loading', true);
    case AUTH_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error.message);
    default:
      return state;
  }
}

export default auth;
