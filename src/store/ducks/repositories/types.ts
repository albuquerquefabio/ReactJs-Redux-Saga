/**
 * Action types
 */

export enum RespositoriesTypes {
  LOAD_REQUEST = '@respositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@respositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@respositories/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Repository {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface RespositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
