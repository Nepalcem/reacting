import { FC } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const CurrencyContainer: FC = () => {
  return (
    <>
      <h4> Container</h4>
      <CurrencyDisplay currency={"Euro"} rate={0.9} />
      <br />
      <CurrencyDisplay currency={"Uah"} rate={41} />
    </>
  );
};

export default CurrencyContainer;
