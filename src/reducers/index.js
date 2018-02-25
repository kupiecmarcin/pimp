import * as TYPES from '../actions/types';
import { combineReducers } from 'redux';

const load = (state = { isLoading: false }, action) => {
  const { type } = action;
  switch (type) {
    case TYPES.SHOW_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.HIDE_LOAD:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

const keys = (state = { items: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.LOAD_API_KEYS:
      return {
        ...state,
        items: payload || [],
      };
    default:
      return state;
  }
};

const notifications = (state = { items: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.LOAD_NOTIFICATIONS:
      return {
        ...state,
        items: payload || [],
      };
    default:
      return state;
  }
};

export default combineReducers({ load, keys, notifications });