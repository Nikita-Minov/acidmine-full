import {usersAPI} from '../api/users.api.js'

const SET_USER = 'SET_USER';
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

const initialState = {
  user: {
    username: ''
  },
  isAuth: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case LOGIN_SUCCESSFUL: {
      return {
        ...state,
        isAuth: action.isAuth
      }
    }
    default: {
      return state;
    }
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const setIsAuth = (isAuth) => {
  return {
    type: LOGIN_SUCCESSFUL,
    isAuth,
  };
};

export const getUser = () => async (dispatch) => {
  const user = await usersAPI.getMe();
  if(user.username) {
    dispatch(setIsAuth(true))
  }
  dispatch(setUser(user));
}


export const loginUser = (username, password) => async (dispatch) => {
  await usersAPI.loginAccount(username, password).then((data) => {
    if(data.username) {
      dispatch(setIsAuth(true));
    }
  })
  await dispatch(getUser());
}

export const logout = () => async (dispatch) => {
  await usersAPI.logout().then((res) => res)
  await dispatch(setIsAuth(false));
  await dispatch(setUser({
    username: null,
  }))
}

export default userReducer;