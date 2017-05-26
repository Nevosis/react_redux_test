import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store';
import router from './router';
import drawImageOnConsole from "./utils/drawImageOnConsole";

drawImageOnConsole("https://vignette2.wikia.nocookie.net/mlpfanart/images/f/fa/Fluttershy_-_Yay.gif");
console.info("Fluttershy tells you hiiiiiiiiiiiiiiiiiiiiiiii, yay !")

ReactDOM.render(
  <Provider store={store}><BrowserRouter>{router}</BrowserRouter></Provider>,
	document.getElementById("root")
);