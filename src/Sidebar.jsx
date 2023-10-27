/* eslint-disable react/prop-types */
import { BsFillArchiveFill, BsPeopleFill, BsCashCoin } from 'react-icons/bs';
import { MdOutlineLiveHelp, MdKeyboardArrowRight } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci';
import { TbSettings2, TbCircleKey } from 'react-icons/tb';
import Userinfo from './Userinfo';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <TbSettings2 className='icon_header' /> Dashboard
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>
            X
          </span>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <div>
              <TbCircleKey className='icon' /> Dashboard
            </div>
          </li>
          <li className='sidebar-list-item'>
            <div>
              <BsFillArchiveFill className='icon' /> Products
            </div>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>

          <li className='sidebar-list-item'>
            <div>
              <BsPeopleFill className='icon' /> Customers
            </div>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li className='sidebar-list-item'>
            <div>
              <BsCashCoin className='icon' /> Income
            </div>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li className='sidebar-list-item'>
            <div>
              <CiDiscount1 className='icon' /> Promote
            </div>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li className='sidebar-list-item'>
            <div>
              <MdOutlineLiveHelp className='icon' /> Help
            </div>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
        </ul>
      </div>
      <div>
        <Userinfo />
      </div>
    </aside>
  );
}

export default Sidebar;
