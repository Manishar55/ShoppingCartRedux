
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart}=useSelector((state)=>state);

  return ( 
    <div className="">

      <nav className="flex justify-between items-center max-auto h-20 max-w-6xl">

        <NavLink to="/">
          <div className="ml-40">
            <img src="../gold.webp" className=" h-11 " alt="imgg"/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <BsCart4 className="text-2xl" />
              {cart.length>0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white ">{cart.length}</span>}
            </div>
          </NavLink>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;
