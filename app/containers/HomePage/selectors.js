import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectStores = () =>
  createSelector(
    selectHome,
    homeState => homeState.stores,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

export { selectHome, makeSelectStores, makeSelectLoading, makeSelectError };
