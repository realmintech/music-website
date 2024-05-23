import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browse from './component/Browse';
import Layout from './layout/Index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Browse />}/>
        </Route>
        </Routes> 
    </BrowserRouter>
  );
};

export default App;
