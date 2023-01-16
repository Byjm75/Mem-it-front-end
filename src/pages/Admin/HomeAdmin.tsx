import jwtDecode from 'jwt-decode';
import { Chart } from '../../components/Admin/Chart/Chart';
import { ToolsBar } from '../../components/ToolsBar';
import { DecodTokenType, UserData } from '../../interface/Interface';
import './HomeAdmin.css';

export const HomeAdmin = () => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    const decodToken: DecodTokenType = jwtDecode(accessToken);

    console.log('Token décodé:', decodToken);
  }
  return (
    <div>
      {/* <ToolsBar /> */}
      <div className='home'>
        <Chart />
      </div>
    </div>
  );
};
