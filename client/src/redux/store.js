import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import promoReducer from './promocodes.reducer';
import userReducer from './user.reducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  promoCodes: promoReducer,
  user: userReducer,
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
