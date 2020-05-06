import { action } from 'typesafe-actions';
import { RespositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RespositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) =>
  action(RespositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RespositoriesTypes.LOAD_FAILURE);
