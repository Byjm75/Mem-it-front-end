import Chart from '../../components/Admin/Chart/Chart';
import AdminTopBar from '../../components/Admin/Topbar/AdminTopBar';
import './HomeAdmin.css';

const Admin = () => {
  return (
    <div>
      <AdminTopBar />
      <div className='home'>
        <Chart />
      </div>
    </div>
  );
};

export default Admin;
