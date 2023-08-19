import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AUthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AUthContextProvider>
      <Navbar />
      <Outlet />
    </AUthContextProvider>
  );
}

export default App;
