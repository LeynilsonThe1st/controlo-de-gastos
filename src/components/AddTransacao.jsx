import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransacao = () => {
  const [texto, setTexto] = useState("");
  const [quantia, setQuantia] = useState(0);

  const { addTransacao } = useContext(GlobalContext);

  const adicionar = (e) => {
    e.preventDefault();

    addTransacao({
      id: Math.floor(Math.random() * 100000000),
      texto,
      quantia: +quantia,
    });
  };

  return (
    <>
      <h3>Adicionar nova transacao</h3>
      <form onSubmit={adicionar}>
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Insira o texto..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Quantia <br />
            (negativo - despesa, positivo - renda)
          </label>
          <input
            type="number"
            value={quantia}
            onChange={(e) => setQuantia(e.target.value)}
            placeholder="Insira a quantia..."
          />
        </div>
        <button className="btn">Adicionar transacao</button>
      </form>
    </>
  );
};
