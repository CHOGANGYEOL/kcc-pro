export const IS_LOGIN_REDUCERS = "IS_LOGIN_REDUCERS";

export const loginAction = (data) => {
  return {
    type: IS_LOGIN_REDUCERS,
    payload: data, // true | false
  };
};


