import Products from "./Products";
import PropTypes from 'prop-types';

const ProductCatalog = ({ products }) => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{textAlign:'center'}}>Product Catalog</h1>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', marginTop:'2%',}}>
        {products.map(product => (
          <Products key={product.id} items={product} />
        ))}
      </div>
    </div>
  );
}

ProductCatalog.propTypes = {
  products: PropTypes.array
};

export default ProductCatalog;