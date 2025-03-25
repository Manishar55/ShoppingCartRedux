
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div>

      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
            <img src="https://img.atom.com/story_images/visual_images/logo-image-79389-shoppingapp.jpg?class=listing" alt="imgg"/>
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
          <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <BsCart4 />
          </NavLink>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
