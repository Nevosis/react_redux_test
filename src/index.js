import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import router from './router';


ReactDOM.render(
  <Provider store={store}><BrowserRouter>{router}</BrowserRouter></Provider>,
	document.getElementById("root")
);