import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transacao } from "./Transacao";

export const ListaDeTransacoes = () => {
  const { transacoes } = useContext(GlobalContext);

  return (
    <>
      <h3>Historico</h3>
      <ul id="list" className="list">
        {transacoes.map((transacao) => <Transacao key={transacao.id} transacao={transacao}/>)}
      </ul>
    </>
  );
};
