import ProductCatalog from '../../Pages/ProductCatalog.jsx'
import data from '../../Pages/data.json'


const MultiShop = ()=> {
  return (
    <div>
      <ProductCatalog products={data.products} />
    </div>
  );
  }
  
  export default MultiShop;