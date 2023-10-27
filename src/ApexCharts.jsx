import './ApexCharts.css';

function ApexCharts() {
  return (
    <div className='main-chart'>
      <div className='overview-header'>
        <div>
          <div
            style={{
              color: 'black',
              fontSize: '19px',
              fontWeight: 'bold',
              letterSpacing: '-1px',
            }}
          >
            Overview
          </div>
          <div style={{ color: '#897f7f', fontSize: 'small' }}>
            Monthly Earning
          </div>
        </div>
        <div style={{ color: 'black' }}>
          {' '}
          <select className='select'>
            <option>Quarterly</option>
            <option>Montly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <div className='month-view'>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '195px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '130px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '258px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '208px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '234px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '117px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '234px' }}
        ></div>
        <div className='month'></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '242px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '221px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '208px' }}
        ></div>
        <div
          className='month'
          style={{ backgroundColor: '#f2efff', height: '212px' }}
        ></div>
      </div>
      <div className='month-name'>
        <div>Jan</div>
        <div>Feb</div>
        <div>Mar</div>
        <div>Apr</div>
        <div>May</div>
        <div>Jun</div>
        <div>July</div>
        <div>Aug</div>
        <div>Sept</div>
        <div>Oct</div>
        <div>Nov</div>
        <div>Dec</div>
      </div>
    </div>
  );
}

export default ApexCharts;
