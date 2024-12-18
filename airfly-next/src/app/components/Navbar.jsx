import { IoSearchSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className=" p-4 bg-[#f8ecde]">
      <nav>
        <div className="flex justify-between">
            {/* DIV1 */}
          <div>
            <h1 className="font-bold text-3xl font-serif ">AIRFLY</h1>
          </div>

          {/* DIV2 */}

      
            <div className="flex justify-evenly gap-20 font-semibold text-xl">
              <a href="">Home</a>
              <a href="">Trending</a>
              <a href="">Products</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
        

{/* DIV3 */}

     
            <div className="flex justify-evenly gap-6 font-bold text-3xl">
              <IoSearchSharp />
              <IoCart />
              <TbLogout />
            </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
