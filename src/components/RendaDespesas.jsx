import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const RendaDespesas = () => {
  const { transacoes } = useContext(GlobalContext);

  const renda = transacoes
    .filter((item) => item.quantia > 0)
    .reduce((acc, item) => (acc += item.quantia), 0)
    .toFixed(2);

  const despesa = -1 * transacoes
    .filter((item) => item.quantia < 0)
    .reduce((acc, item) => (acc += item.quantia), 0)
    .toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Renda</h4>
        <p id="money-plus" className="money plus">
          +${renda}
        </p>
      </div>
      <div>
        <h4>Despesas</h4>
        <p id="money-minus" className="money minus">
          -${despesa}
        </p>
      </div>
    </div>
  );
};
