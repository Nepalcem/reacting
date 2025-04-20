import { FC } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const CurrencyContainer: FC = () => {
  return (
    <>
      <h4> Container</h4>
      <CurrencyDisplay currency={"Euro"} rate={0.9} />
      <br />
      <CurrencyDisplay currency={"Uah"} rate={41} />
      <br />
      <CurrencyDisplay currency={"RON"} rate={4.38} />
    </>
  );
};

export default CurrencyContainer;
