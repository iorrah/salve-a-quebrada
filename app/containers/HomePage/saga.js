import { put, takeLatest, call } from 'redux-saga/effects';
import request from 'utils/request';
import { API_STORES } from 'utils/api';

import {
  storesLoaded,
  storesLoadingError,
  addStoreSuccess,
  addStoreError,
} from './actions';

import { LOAD_STORES, ADD_STORE } from './constants';

export function* getStores() {
  try {
    const rawStores = yield call(request, API_STORES);
    yield put(storesLoaded(rawStores));
  } catch (err) {
    yield put(storesLoadingError(err));
  }
}

export function* addStore(payload) {
  try {
    const store = yield call(request, API_STORES, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.store),
    });

    yield put(addStoreSuccess(store));
  } catch (err) {
    yield put(addStoreError(err));
  }
}

export default function* init() {
  yield takeLatest(LOAD_STORES, getStores);
  yield takeLatest(ADD_STORE, addStore);
}
