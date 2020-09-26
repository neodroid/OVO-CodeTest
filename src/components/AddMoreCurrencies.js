import React, { useState } from "react";
import Dropdown from "./Dropdown";

const AddMoreCurrencies = ({
  onSelectedChange,
  addCurrency,
  changeVal,
  submit,
  list,
}) => {
  const [addNew, setAddNew] = useState(false);
  const [language, setLanguage] = useState("Choose Currency");

  const clickAdd = () => {
    setAddNew(true);
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setAddNew(false);
    submit(language);
    setLanguage("Choose Currency");
  };

  if (!addNew) {
    return (
      <div class="flex justify-center shadow my-6 py-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={clickAdd}
        >
          Add More Currency
        </button>
      </div>
    );
  } else {
    return (
      <div class="flex-col justify-center shadow">
        <div class="text-center  px-4 py-2 m-2 font-bold text-xl mb-2 ">
          Enter Currency
        </div>
        <form
          class="bg-white shadow-md rounded px-8 pt-1 pb-8 mb-4"
          id="username"
          type="text"
          placeholder="Username"
          onSubmit={clickSubmit}
        >
          <div class="flex justify-center">
            <Dropdown
              selected={language}
              onSelectedChange={(val) => setLanguage(val)}
              options={list}
            />

            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
