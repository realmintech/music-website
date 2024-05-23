  import { Outlet } from 'react-router-dom';
  import Sidebar from '../component/Sidebar'
  import Header from '../component/Header';

  const Layout = () => {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <Header />
            <Outlet />
          </div>
        </div>
      </div> 
    )
  };
  export default Layout