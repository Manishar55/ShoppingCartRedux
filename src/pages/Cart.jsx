import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const[totalAmount, setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=>acc+curr.price, 0));
  }, [cart]);

  return (
    <div className="ml-[100px] mr-[50px] justify-center items-center px-20 w-11/12 mx-auto">
      {
        cart.length > 0 ?
          (
            <div className="flex flex-row gap-20 w-full ">
              <div className="">
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="flex flex-col gap-20 mt-[70px] ">
                <div>
                  <div className="uppercase text-xl font-bold text-green-700">Your Cart</div>
                  <div className="uppercase text-4xl font-bold text-green-700">Summary</div>
                  <p  className="font-bold text-xl"><span>Total Items: {cart.length}</span></p>
                  <div></div>
                </div>

                <div>
                  <p className="font-bold text-xl">Total Amount: ${totalAmount} </p>
                  <button className="bg-green-600 px-10 rounded-md py-3 text-white text-xl font-bold hover:scale-110 transition duration-300 ease-in mt-6">Checkout Now</button>
                </div>
              </div>

            </div>
          ) :
          (
            <div>
              <h1>Cart is Empty</h1>
              <Link to={"/"}><button>Shop Now</button></Link>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
