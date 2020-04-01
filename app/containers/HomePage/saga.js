import * as firebase from 'firebase/app';
import '@firebase/firestore';

import { take, put, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { storesLoaded, storesLoadingError } from './actions';
import { LOAD_STORES } from './constants';

const firebaseConfig = {
  apiKey: 'xxxxxxxxx',
  authDomain: 'xxxxxxxxx',
  databaseURL: 'xxxxxxxxx',
  projectId: 'xxxxxxxxx',
  storageBucket: 'xxxxxxxxx',
  messagingSenderId: 'xxxxxxxxx',
  appId: 'xxxxxxxxx',
  measurementId: 'xxxxxxxxx',
};

export function* getStores() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const reference = firebase.firestore().collection('stores');
  const channel = eventChannel(emit => reference.onSnapshot(emit));

  try {
    while (true) {
      const rawStores = [];
      const data = yield take(channel);

      data.forEach(doc => {
        rawStores.push({ ...doc.data(), id: doc.id });
      });

      yield put(storesLoaded(rawStores));
    }
  } catch (err) {
    yield put(storesLoadingError(err));
  }
}

export default function* init() {
  yield takeLatest(LOAD_STORES, getStores);
}
