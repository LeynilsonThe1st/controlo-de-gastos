import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transacao = ({ transacao }) => {
  const { apagarTransacao } = useContext(GlobalContext);
  const sinal = transacao.quantia > 0 ? "+" : "-";

  return (
    <li className={transacao.quantia > 0 ? "plus" : "minus"}>
      {transacao.texto}
      <span>
        {sinal}${Math.abs(transacao.quantia)}
      </span>
      <button
        className="delete-btn"
        onClick={() => apagarTransacao(transacao.id)}
      >
        x
      </button>
    </li>
  );
};
