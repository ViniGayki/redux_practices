import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const items =useSelector(state=>state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item=>{
          return <CartItem key={item.id}
          item={{id:item.id, title: item.title, quantity: item.totalQuantity,  total: item.totalPrice, price:item.price }}
        />})}
        
        {/* <CartItem
          item={{ title: 'item.title', quantity: 3,  total:22, price:6 }}/> */}
          </ul>
    </Card>
  );
};
   
export default Cart;