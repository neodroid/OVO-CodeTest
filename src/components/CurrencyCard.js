import React from "react";

const thousandsSeparators = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

const CurrencyCard = ({ rate, label, description, value, remove }) => {
  const currencyResult = thousandsSeparators(
    ((+rate * value) / 1.1634).toFixed(2)
  );
  const currencyRate = thousandsSeparators((rate / 1.1634).toFixed(2));
  return (
    <div className=" rounded overflow-hidden shadow-lg">
      <div className="pl-6 py-4 flex ">
        <div className="w-4/5">
          <div className="font-bold text-xl mb-2 flex justify-between ">
            <div>{label}</div>
            <div>{currencyResult}</div>
          </div>

          <p className="text-gray-700 text-base">
            {description}
            <br />1 USD = {label}
            {currencyRate}
          </p>
        </div>
        <div className="w-1/5 flex content-center ml-3">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold px-3 rounded-md"
            onClick={remove}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
