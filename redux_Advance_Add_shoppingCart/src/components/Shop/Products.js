import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_ITEMS = [{
    id: 1,
    title: 'my first Book',
    price: 100,
    description: 'This is a first product - amazing!',
  },
  {
    id: 2,
    title: 'my Secound Book',
    price: 200,
    description: 'This is a first product - amazing!',
  },
  {
    id: 3,
    title: 'my third Book',
    price: 300,
    description: 'This is a first product - amazing!',
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return<ProductItem key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />

        })}

      </ul>
    </section>
  );
}; 

export default Products;
