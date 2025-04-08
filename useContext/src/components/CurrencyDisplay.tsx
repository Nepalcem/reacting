import { FC, useContext } from "react";
import CurrencyContext from "./CurrencyContext";

interface Currencies {
  currency: string;
  rate: number;
}

const CurrencyDisplay: FC<Currencies> = ({ currency, rate }) => {
  const priceInUsd = useContext(CurrencyContext);
  const convertedPrice = priceInUsd * rate;

    return <>Price in new Currency ({currency}): {convertedPrice.toFixed(2)}</>;
};

export default CurrencyDisplay;
