import { useSelector } from "react-redux";
import MenuPageItems from "./MenuPageItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("This is Cart Item", cartItems);

  return (
    <div className="text-2xl font-bold m-5 p-4 text-center">
      Cart
      <div>
      {cartItems.map((item, index)=>(
        <MenuPageItems key={index} menuItem={item} />
      ))}
       
      </div>
      {cartItems.length === 0 && <div className="text-2xl font-bold m-5 p-4 text-center">No Cart Item</div>
      }
    </div>
  );
};
export default Cart;
