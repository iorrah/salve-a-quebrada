import * as firebase from 'firebase/app';
import '@firebase/firestore';

import { take, put, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { storesLoaded, storesLoadingError } from './actions';
import { LOAD_STORES } from './constants';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
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
