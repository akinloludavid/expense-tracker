import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
function Home() {
  return (
      
      <div className="App">
        <Header/>

        <div class = "container">
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </div>
    
  );
}

export default Home;
