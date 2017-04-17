/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Action } from 'redux';
import { User } from '../models';
import { UserActions } from '../actions';
import { createSelector } from 'reselect';

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UsersState {
  currentUser: User;
};

const initialState: UsersState = {
  currentUser: null
};

export const UsersReducer =
  function(state: UsersState = initialState, action: Action): UsersState {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
    const user: User = (<UserActions.SetCurrentUserAction>action).user;
      return {
        currentUser: user
      };
    default:
      return state;
  }
};

export const getUsersState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(
  getUsersState,
  ( state: UsersState ) => state.currentUser );
