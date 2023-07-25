
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {

  const cartIsEnabled = useSelector(state=> state.ui.cartIsEnabled);

  return (
    <Layout>
     {cartIsEnabled && <Cart />}
      <Products />
    </Layout>
  );
}
 
export default App;
 