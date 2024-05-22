import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Browse from './component/Browse';

const App = () => {
  const Layout = () => {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Header />
            <Outlet />
          </div>
        </div>
      </div> 
    )
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/browse' element={<Browse />}/>
        </Route>
        </Routes> 
    </BrowserRouter>
  );
};

export default App;
