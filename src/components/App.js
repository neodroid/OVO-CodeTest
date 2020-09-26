import React, { useEffect, useState } from "react";
import axios from "axios";

import CurrencyCard from "./CurrencyCard";
import Header from "./Header";
import AddMoreCurrencies from "./AddMoreCurrencies";
import description from "../DATA/description";
import Debug from "./Debug";
import "../styles/app.css";

const fetcher = async () => {
  const { data } = await axios.get("https://api.exchangeratesapi.io/latest");
  const hasil = Object.entries(data.rates).map(([label, rate]) => ({
    label,
    rate,
  }));
  return hasil;
};

function App() {
  const [rates, setRates] = useState([]);
  const [text, setText] = useState(10);
  const [addCurrency, setAddCurrency] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState([
    "IDR",
    "SGD",
    "HKD",
  ]);

  useEffect(() => {
    fetcher().then((value) => {
      setRates(value);
    });
  });

  const submit = (value) => {
    setSelectedCurrency([...selectedCurrency, value]);
    setAddCurrency("");
  };

  return (
    <div className="flex justify-center">
      <div class="w-2/3 my-10">
        <Header value={text} changeVal={(e) => setText(+e.target.value)} />
        {rates
          .filter(({ label }) => selectedCurrency.includes(label))
          .map(({ label, rate }) => {
            return (
              <div key={label}>
                <CurrencyCard
                  rate={rate}
                  label={label}
                  description={description[label]}
                  value={text}
                  remove={() =>
                    setSelectedCurrency(
                      selectedCurrency.filter((val) => val !== label)
                    )
                  }
                />
              </div>
            );
          })}
        <AddMoreCurrencies
          list={rates.filter(({ label }) => !selectedCurrency.includes(label))}
          addCurrency={addCurrency}
          changeVal={(e) => setAddCurrency(e.target.value.toUpperCase())}
          submit={(val) => submit(val)}
          onSelectedChange={(val) => submit(val)}
        />
      </div>
    </div>
  );
}
export default App;
