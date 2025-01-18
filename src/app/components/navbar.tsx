import { IoIosContact, IoMdSearch } from "react-icons/io";  // Add IoSearch import
import { BiCart } from "react-icons/bi";
import Image from 'next/image';  // Add Image import

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-300 py-2 md:px-[170px] px-4">
      <div>
  <IoMdSearch size={30}  /> 
</div>

<div>
  <Image src={'/book.png'} width={50} height={50} alt="api" />
</div>

<div className="flex items-center md:space-x-7 space-x-3">
  <IoIosContact size={30}  />
  <BiCart size={30}  />
</div>
      </header>
    </>
  );
};

export default Navbar;
