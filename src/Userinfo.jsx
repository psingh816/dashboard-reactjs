import { Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Userinfo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        margin: '13px 13px 65px 13px',
        padding: '12px',
        backgroundColor: '#2d2d69',
        borderRadius: '5px',
        alignItems: 'center',
      }}
    >
      <div>
        <Avatar
          alt='Remy Sharp'
          src='https://mui.com/static/images/avatar/2.jpg'
        />
      </div>
      <div>
        <div style={{ color: 'white', fontSize: '12px' }}>Evano</div>
        <div style={{ color: 'white', fontSize: '8px' }}>Project Manager</div>
      </div>
      <KeyboardArrowDownIcon fontSize='small' style={{ color: 'white' }} />
    </div>
  );
}
