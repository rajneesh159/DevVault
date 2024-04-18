import React from "react";
import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <div>
      <img
        src={
          "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.1014153057.1712405928&semt=sph"
        }
        className="w-10 h-10 rounded-full-border border-gray-800"
      />

      <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
        <MdLogout size={22} />
      </div>
    </div>
  );
};

export default Logout;
