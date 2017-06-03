// @flow
import { ADD_IMAGE, ADD_IMAGES } from '../actions/board';

export default (state, action) => {
  if(state === undefined) {
    return {
      images: [],
    };
  }

  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.image]
      };
    case ADD_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.images]
      };
    default:
      return state;
  }
}
