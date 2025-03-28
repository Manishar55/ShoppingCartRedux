
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

      <div className="flex flex-row items-center justify-between hover:scale-110 transition duration-300 ease-in
       gap-10 p-4 mt-10 ml-5 rounded-xl outline w-[900px] ">
        <div className="h-[280px] w-full ">
          <img src={item.image} className="h-full w-full " alt="imgg"  />
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
