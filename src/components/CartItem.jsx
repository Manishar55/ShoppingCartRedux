
import { MdDelete } from "react-icons/md";


const CartItem = ({item, itemIndex}) => {
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
          <div>
            <MdDelete />
          </div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;
