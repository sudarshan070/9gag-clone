import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
