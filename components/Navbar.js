import Link from "next/link";
import React from "react";

let Links = [];

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-1">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-600">
         <Link href={'/'}> <spam className="text-3xl mr-1 ml-2 ">SinPen</spam></Link>
        </div>
        <ul className="md:flex md:items-center text-2xl pt-3 cursor-pointer">
          <li>
            <ion-icon name="cart-outline"></ion-icon>
          </li>
          <li>
            <ion-icon name="person-outline"></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
