import './App.css'
import { Header } from './components/Header'
import { Saldo } from './components/Saldo'
import { RendaDespesas } from './components/RendaDespesas'
import { ListaDeTransacoes } from './components/ListaDeTransacoes'
import { AddTransacao } from './components/AddTransacao'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Saldo />
        <RendaDespesas />
        <ListaDeTransacoes />
        <AddTransacao />
      </div>
    </GlobalProvider>
  )
}

export default App
