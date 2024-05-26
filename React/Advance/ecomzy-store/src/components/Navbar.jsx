import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div >
      <nav class="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" alt="" className="h-14" />
          </div>
        </NavLink>

        <div class="flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium">
          <NavLink to="/">
            <li class="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</li>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >{cart.length}</span>
              }
            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
