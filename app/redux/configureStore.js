
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promise from './promise';

function configureStore() : any {
  
  const enhancer = compose(
    applyMiddleware(thunk, promise)
  );

  const store = createStore(reducer, enhancer);
  return store;
}

export const store = configureStore();
