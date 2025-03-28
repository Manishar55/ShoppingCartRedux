
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({item, itemIndex}) => {
  const dispatch=useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div>

      <div>
        <div>
          <img src={item.image} alt="imgg" />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
          </div>
          <div onClick={removeFromCart}>
            <MdDelete />
          </div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;
