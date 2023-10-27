import { BsJustify } from 'react-icons/bs';
import Searchbar from './Searchbar';

// eslint-disable-next-line react/prop-types
function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>Hello Shahrukh👋🏻,</div>
      <div className='header-right'>
        <Searchbar />
      </div>
    </header>
  );
}

export default Header;
