export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACAO":
      return {
        ...state,
        transacoes: [action.payload, ...state.transacoes],
      };
    case "APAGAR_TRANSACAO":
      return {
        ...state,
        transacoes: state.transacoes.filter(
          (transacao) => transacao.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
