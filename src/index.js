import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//setup redux
import {Provider} from 'react-redux'
import { store } from './redux/reducer/rootReducer'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

