import produce from 'immer';

import {
  LOAD_STORES,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_ERROR,
  ADD_STORE,
  ADD_STORE_SUCCESS,
  ADD_STORE_ERROR,
} from './constants';

export const initialState = {
  stores: [],
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STORES:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_STORES_SUCCESS:
        draft.stores = action.stores;
        draft.loading = false;
        break;

      case LOAD_STORES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_STORE:
        draft.loading = true;
        draft.error = false;
        break;

      case ADD_STORE_SUCCESS:
        draft.loading = false;
        draft.stores.push(action.store);
        break;

      case ADD_STORE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
