import { put, takeLatest, call } from 'redux-saga/effects';
import request from 'utils/request';
import { storesLoaded, storesLoadingError } from './actions';
import { LOAD_STORES } from './constants';

export function* getStores() {
  try {
    const rawStores = yield call(request, 'http://localhost:8080/v1/stores');
    yield put(storesLoaded(rawStores));
  } catch (err) {
    yield put(storesLoadingError(err));
  }
}

export default function* init() {
  yield takeLatest(LOAD_STORES, getStores);
}
