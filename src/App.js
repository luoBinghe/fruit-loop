import './App.scss';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalProvider } from './hooks/useGlobalContext'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Dashboard />
      </GlobalProvider>
    </div>
  );
}

export default App;
