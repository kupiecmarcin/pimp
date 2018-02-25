import * as API from '../utils/api';
import * as TYPES from './types';

export const showLoad = () => ({ type: TYPES.SHOW_LOAD });
export const hideLoad = () => ({ type: TYPES.HIDE_LOAD });

export const fetchKeys = () => dispatch => {

  dispatch(showLoad());
  return API.getApiKeys()
    .then(keys => {
      console.log(keys);
      dispatch({
        type: TYPES.LOAD_API_KEYS,
        payload: keys,
      });
    })
    .then(() => {
      dispatch(hideLoad());
    });
};

export const fetchNotifications = () => dispatch => {

  dispatch(showLoad());
  return API.getNotifications()
    .then(ntfs => {
      console.log(ntfs);
      dispatch({
        type: TYPES.LOAD_NOTIFICATIONS,
        payload: ntfs,
      });
    })
    .then(() => {
      dispatch(hideLoad());
    });
};