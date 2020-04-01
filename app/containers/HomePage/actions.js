import {
  LOAD_STORES,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_ERROR,
} from './constants';

export function loadStores() {
  return {
    type: LOAD_STORES,
  };
}

export function storesLoaded(stores) {
  return {
    type: LOAD_STORES_SUCCESS,
    stores,
  };
}

export function storesLoadingError(error) {
  return {
    type: LOAD_STORES_ERROR,
    error,
  };
}
