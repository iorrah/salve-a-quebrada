import {
  LOAD_STORES,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_ERROR,
  ADD_STORE,
  ADD_STORE_SUCCESS,
  ADD_STORE_ERROR,
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

export function addStore(store) {
  return {
    type: ADD_STORE,
    store,
  };
}

export function addStoreSuccess(store) {
  return {
    type: ADD_STORE_SUCCESS,
    store,
  };
}

export function addStoreError(error) {
  return {
    type: ADD_STORE_ERROR,
    error,
  };
}
