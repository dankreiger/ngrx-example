import { createAction, ActionCreator } from '@ngrx/store';

/**
 * @description declarations
 */

export type ViewAction = ActionCreator<ViewActions>;

export enum ViewActions {
  CHANGE_VIEW = 'CHANGE_VIEW'
}

/**
 * @description action
 */
export const changeView = createAction(ViewActions.CHANGE_VIEW);
