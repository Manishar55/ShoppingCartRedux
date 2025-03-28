
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

      <div className="flex flex-row items-center ease-in
       gap-10 p-4 mt-10 ml-5 rounded-xl shadow-md w-[60vw] hover:shadow-xl ">

        <div className="h-[290px] w-[300px]">
          <img src={item.image} className="h-full w-full " alt="imgg"  />
        </div>

        <div className="mr-10">
          <h1 className="font-bold text-xl">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
          <div className="flex flex-row justify-between mt-10">
            <div>
              <p className="text-green-600 font-bold">${item.price}</p>
            </div>
            <div className=" bg-red-300 text-xs h-7 w-7 flex justify-center items-center rounded-full text-red-700" onClick={removeFromCart}>
              <MdDelete />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;
