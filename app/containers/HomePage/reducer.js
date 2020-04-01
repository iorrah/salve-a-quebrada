import produce from 'immer';

import {
  LOAD_STORES,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_ERROR,
} from './constants';

export const initialState = {
  stores: [],
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
    }
  });

export default homeReducer;
