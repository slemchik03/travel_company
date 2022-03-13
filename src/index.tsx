import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage';
import { HomePage } from './components/pages/HomePage/HomePage';
import { store } from './store/store';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
