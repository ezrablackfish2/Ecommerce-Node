import axios from 'axios';
import Rating from '../components/Rating';
import { getProducts } from '../api';

const HomeScreen = {
  render: async () => {
    try {
  const products = await getProducts();
  // Handle products data
} catch (error) {
  console.error('Error fetching products:', error);
  // Handle the error, e.g., show an error message to the user
}
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
products.map((product) => {
    console.log(product.name, product.image);
});    return `
    <ul class="products">
      ${products
        .map(
          (product) =>
	 `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">
          <a href="/#/product/1">
            ${product.name}
          </a>
        </div>
        <div class="product-rating">
          ${Rating.render({
            value: product.rating,
            text: `${product.numReviews} reviews`,
          })}
        </div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
          $${product.price}
        </div>
        </div>
      </li>
      `
        )
        .join('\n')}
    `;
  },
};
export default HomeScreen;
