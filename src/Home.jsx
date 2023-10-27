import Items from './Items';
import CustomerBar from './CustomerBar';
import ProductSell from './ProductSell';
import ApexCharts from './ApexCharts';

function Home() {
  return (
    <main className='main-container'>
      <div className='main-cards'>
        <Items />
      </div>
      <div className='charts'>
        <ApexCharts />
        <CustomerBar />
      </div>
      <ProductSell />
    </main>
  );
}

export default Home;
