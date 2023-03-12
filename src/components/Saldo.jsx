import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Saldo = () => {
  const { transacoes } = useContext(GlobalContext);

  const total = transacoes
    .reduce((acc, item) => (acc += item.quantia), 0)
    .toFixed(2);

  return (
    <>
      <h4>Seu Saldo</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
