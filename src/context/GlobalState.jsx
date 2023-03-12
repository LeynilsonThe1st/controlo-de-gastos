import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//estado inicial
const initialState = {
  transacoes: [],
};

// Criar o context
export const GlobalContext = createContext(initialState);

// Provider componenet
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function apagarTransacao(id) {
    dispatch({
      type: "APAGAR_TRANSACAO",
      payload: id,
    });
  }

  function addTransacao(transacao) {
    dispatch({
      type: "ADD_TRANSACAO",
      payload: transacao,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transacoes: state.transacoes, apagarTransacao, addTransacao }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
