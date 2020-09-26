import React from "react";

const thousands_separators = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

const CurrencyCard = ({ rate, label, description, value, remove }) => {
  return (
    <div class=" rounded overflow-hidden shadow-lg">
      <div class="pl-6 py-4 flex ">
        <div class="w-4/5">
          <div class="font-bold text-xl mb-2 flex justify-between ">
            <div>{label}</div>
            <div>
              {/* CURRENCY RESULT */}
              {thousands_separators(((+rate * value) / 1.1634).toFixed(2))}
            </div>
          </div>

          <p class="text-gray-700 text-base">
            {description}
            <br />1 USD = {label}
            {/* CURRENCY RATE */}
            {thousands_separators((rate / 1.1634).toFixed(2))}
          </p>
        </div>
        <div class="w-1/5 flex content-center ml-3">
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold px-3 rounded-md"
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
