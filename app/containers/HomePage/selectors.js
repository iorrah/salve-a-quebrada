import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectStores = () =>
  createSelector(
    selectHome,
    homeState => homeState.stores,
  );

export { selectHome, makeSelectStores };
