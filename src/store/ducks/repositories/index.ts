import { RespositoriesState, RespositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RespositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RespositoriesState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RespositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RespositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RespositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, data: [] };

    default:
      return state;
  }
};

export default reducer;
