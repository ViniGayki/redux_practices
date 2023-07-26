import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart_slice';


const ProductItem = (props) => {

  const despatch = useDispatch();

  const { id, title, price, description } = props;

  const AddTOCartHandler=()=>{

    despatch(cartActions.addItemToCart({
      id:id,
      title: title,
      price: price,
      description: description

    }))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddTOCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};



export default ProductItem;
