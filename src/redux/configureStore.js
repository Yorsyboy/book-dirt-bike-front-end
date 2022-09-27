import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { RentalsReducer, CreateRentalReducer } from './reducers/Rentals';
import {
  UsersReducer, SignupReducer, SigninReducer, SignoutReducer,
} from './reducers/User';
import { MotorcyclesReducer, CreateMotorcycleReducer } from './reducers/Motorcycle';

const rootReducer = combineReducers({
  SignupReducer,
  SigninReducer,
  SignoutReducer,
  UsersReducer,
  MotorcyclesReducer,
  RentalsReducer,
  CreateMotorcycleReducer,
  CreateRentalReducer,
});
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
