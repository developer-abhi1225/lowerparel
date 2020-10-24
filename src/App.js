import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import NextApp from "./components/MainApp";
import history from './history';

function App() {
  return (
    <BrowserRouter history={history}>
      <NextApp />
    </BrowserRouter>
  );
}

export default App;
