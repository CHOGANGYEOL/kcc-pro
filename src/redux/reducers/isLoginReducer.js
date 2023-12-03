import { IS_LOGIN_REDUCERS } from "../actions/isLogin";

const initialState = { isLogin: false };

const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN_REDUCERS:
      return { isLogin: action.payload };
    default:
      return state;
  }
};

export default isLoginReducer;
