import PropTypes from 'prop-types';
import './style.css'


const Product = ({ items }) => {
  return (
    <div style={{marginTop:'3%', backgroundColor:'rgb(245,245,245)'}}>
      <img style={{width:'200px', height:'200px'}} src={items.image} alt={items.name} className="product-image" />
      <h2>{items.name}</h2>
      <p style={{color:'green'}}>Price: {items.price}</p>
      <p style={{color:'red'}}>Quantity Available: {items.quantity}</p>
      <p style={{color:'darkgoldenrod'}}>Rating: {items.rating}</p>
    </div>
  );
}

Product.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;