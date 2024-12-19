
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("item removed");
  }
  return (
    <div className="flex  items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
         <div>

          <div>
            <img src={item.image}/>
          </div>
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
              <p>{item.price}</p>
              <div onClick={removeFromCart}>
                <AiFillDelete/>
              </div>
            </div>

          </div>
         </div>

    </div>
  );
};

export default CartItem;
