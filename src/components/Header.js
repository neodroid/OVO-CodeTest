import React from "react";

const Header = ({ value, changeVal }) => {
  return (
    <div className="flex-col justify-center shadow">
      <div className="text-center  px-4 py-2 m-2 font-bold text-xl mb-2 ">
        United States Dollar
      </div>
      <form className=" text-center px-4 py-2 ">
        <label>USD : </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={value}
          onChange={changeVal}
        />
      </form>
    </div>
  );
};

export default Header;
