import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  data: null,
};

const authenticationReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        loading: true,
        error: false,
        data: null,
      };

    case SIGNIN_ERROR:
      return {
        loading: false,
        error: true,
        data: null,
      };

    case SIGNIN_SUCCESS:
      return {
        loading: false,
        error: false,
        data: user,
      };


    default:
      return state;
  }
};

export default authenticationReducer;