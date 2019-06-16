import { createAction } from '@ngrx/store';
import { EViewActionTypes } from '../typings/view.typings';

export const ChangeView = createAction(EViewActionTypes.ChangeView);
