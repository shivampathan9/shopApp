import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Navbar =() =>{
  const {cart} = useSelector((state) => state)
  return (
    <div>
      <nav className=" flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
        <div className="ml-5">
        <img src="../logo.png" className=" h-14"/>

        </div>

        </NavLink>


        <div className="text-slate-100 font-medium flex items-center space-x-6 mr-5">
          <NavLink to="/">
            <p className="text-white">Home</p>

          </NavLink>

          
          <NavLink to="/cart">
          <div className=" relative">
            {
                cart.length>0 && 

                <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5
                 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
            }
              <FaCartShopping  className=" text-2xl"/>
             
              
          </div>
          
          </NavLink>
        
        </div>
      </nav>

      
      
    </div>
  )
}

export default Navbar;
