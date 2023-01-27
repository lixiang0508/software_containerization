import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import {Link,Route,BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {Provider} from "react-redux";
import {persistor} from './redux/store'
import {PersistGate} from 'redux-persist/lib/integration/react'

ReactDOM.render(

    <BrowserRouter>

        <Provider store={store}>
            <App/>
        </Provider>

    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

