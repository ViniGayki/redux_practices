import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./store/cart";
function App() {
  const destpach = useDispatch();
  const items = useSelector(state=>state.items);

  const AddHandler = () => {
    const item = { id: 1, name: "sona" };
    destpach(cartAction.add(item));
  }

  const RemoveHAndler = () => {
    destpach(cartAction.delete()); 
  }

  return (
    <div div className="App">
   
      {JSON.stringify(items)}
      <button onClick={AddHandler}>Add Itmes</button>
      <button onClick={RemoveHAndler}>Remove itmes</button>
    </div>
  );
}

export default App;
