import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
const ProfilBtn = () => {
  const navigate = useNavigate();
  const profilElement = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('../profil');
  };
  return (
    <div>
      <img
        src="../assets/profile-icon-png-917.png"
        alt="phto de profil"
        style={{ width: '5em', margin: '5px 25px 0' }}
        ref="profil"
        onClick={profilElement}
      />
    </div>
  );
};

export default ProfilBtn;
