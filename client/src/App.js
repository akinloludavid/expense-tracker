import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalContextProvider from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header/>

        <div class = "container">
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
