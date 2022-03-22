import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ handleAddToCart, product }) => {
  //const { handleAddToCart, product } = props;
  const style = {
    display: 'inline',
    fontSize: '17px',
    color: '#0E161A',
    paddingLeft: '5px',
  };
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p style={{ fontSize: '17px' }}>
          Add To Cart
          <p style={style}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </p>
        </p>
      </button>
    </div>
  );
};

export default Product;
