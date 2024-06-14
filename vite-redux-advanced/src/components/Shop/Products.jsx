import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 5,
    title: 'My 1st book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 10,
    title: 'My 2nd book',
    description: 'The second book I ever wrote'
  },
  {
    id: 'p3',
    price: 15,
    title: 'My 3rd book',
    description: 'The third book I ever wrote'
  },
  {
    id: 'p4',
    price: 20,
    title: 'My 4th book',
    description: 'The fourth book I ever wrote'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
