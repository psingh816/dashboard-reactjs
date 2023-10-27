import { Avatar, Divider } from '@mui/material';
import './ProductSell.css';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';

const PRODUCTS = [
  {
    id: '1',
    name: 'Abstract 3D',
    stockCount: 32,
    price: 45.99,
    totalSales: 20,
    img: 'https://t4.ftcdn.net/jpg/04/17/21/37/360_F_417213726_TF9m4svuzakdf9HzkO1e6easVCLLZBGs.jpg',
  },
  {
    id: '2',
    name: 'Sarphens illustration',
    stockCount: 32,
    price: 45.99,
    totalSales: 20,
    img: 'https://www.worldatlas.com/r/w1200/upload/87/84/05/shutterstock-320049452.jpg',
  },
];

function ProductSell() {
  return (
    <div className='list-body'>
      <div className='list-header'>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            padding: '10px',
          }}
        >
          Product Sell
        </div>
        <div style={{ display: 'flex', alignItems: 'center', margin: '1px' }}>
          <Searchbar />
          <Dropdown />
        </div>
      </div>
      <div className='list-subheader'>
        <div>Product Name</div>
        <div className='data-list'>
          <div>Stock</div>
          <div>Price</div>
          <div>Total Sales</div>
        </div>
      </div>
      <Divider />
      <ul
        style={{
          padding: '10px',
          paddingTop: '10px',
        }}
      >
        {PRODUCTS.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: 'black',
              }}
            >
              <div>
                <Avatar
                  variant={'rounded'}
                  alt={product.name}
                  src={product.img}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </div>
              <div
                style={{
                  paddingLeft: '20px',
                  color: '#b3b3b3',
                  fontSize: '12px',
                }}
              >
                <div
                  style={{
                    fontWeight: 'bold',
                    display: 'flex',
                    color: '#000000',
                    fontSize: '15px',
                  }}
                >
                  {product.name}
                </div>
                <div>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>

            <div
              className='data-list'
              style={{ color: 'black', fontSize: '12px' }}
            >
              <div style={{ marginLeft: '' }}>
                {product.stockCount} in stock
              </div>
              <div
                style={{
                  fontWeight: 'bold',
                  marginRight: '78px',
                }}
              >
                ${product.price}
              </div>
              <div>{product.totalSales}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductSell;
