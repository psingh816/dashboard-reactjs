import DollarImage from './images/dollar-image.jpg';
import Balance from './images/balance.jpg';
import Orders from './images/orders.jpg';
import TotalSales from './images/total-sales.jpg';

function Items() {
  return (
    <>
      <div className='card'>
        <img src={DollarImage} />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Earning</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $198k
          </span>
          <div>
            <span style={{ color: 'green', paddingRight: '2px' }}>🠙37.8%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={Orders} />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Orders</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $2.4k
          </span>
          <div>
            <span style={{ color: 'red', paddingRight: '2px' }}>🠛2%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={Balance} />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Balance</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $2.4k
          </span>
          <div>
            <span style={{ color: 'red', paddingRight: '2px' }}>🠛2%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={TotalSales} />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Total Sales</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $89k
          </span>
          <div>
            <span style={{ color: 'green', paddingRight: '2px' }}>🠙11.8%</span>
            <span>this week</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
