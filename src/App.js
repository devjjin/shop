import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AUthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AUthContextProvider>
        <Navbar />
        <Outlet />
      </AUthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
