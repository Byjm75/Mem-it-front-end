import jwtDecode from 'jwt-decode';
import Chart from '../../components/Admin/Chart/Chart';
import ToolsBar from '../../components/ToolsBar';
import './HomeAdmin.css';

export interface UserData {
  id: string;
  pseudo: string;
  image: string;
  email: string;
  password: string;
  role: string;
}

const HomeAdmin = () => {
  interface DecodTokenType {
    utilisateur: UserData;
    exp: number;
    iat: number;
  }

  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    const decodToken: DecodTokenType = jwtDecode(accessToken);

    console.log('Token décodé:', decodToken);
  }
  return (
    <div>
      <ToolsBar />
      <div className='home'>
        <Chart />
      </div>
    </div>
  );
};

export default HomeAdmin;
