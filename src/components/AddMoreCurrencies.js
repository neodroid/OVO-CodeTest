import React, { useState } from "react";
import Dropdown from "./Dropdown";

const AddMoreCurrencies = ({ submit, list }) => {
  const [addNew, setAddNew] = useState(false);
  const [currencyValue, setCurrencyValue] = useState("Choose Currency");

  const clickAdd = () => {
    setAddNew(true);
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setAddNew(false);
    submit(currencyValue);
    setCurrencyValue("Choose Currency");
  };

  if (!addNew) {
    return (
      <div className="flex justify-center shadow my-6 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={clickAdd}
        >
          Add More Currency
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex-col justify-center shadow">
        <div className="text-center  px-4 py-2 m-2 font-bold text-xl mb-2 ">
          Enter Currency
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-1 pb-8 mb-4"
          id="username"
          type="text"
          placeholder="Username"
          onSubmit={clickSubmit}
        >
          <div className="flex justify-center">
            <Dropdown
              selected={currencyValue}
              onSelectedChange={(val) => setCurrencyValue(val)}
              options={list}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={clickSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default AddMoreCurrencies;
