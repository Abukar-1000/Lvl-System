import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme } from './Themes/DarkTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Pages/Main';
import Providers from './Providers';

const queryClient = new QueryClient(); 
function App() {
  return (
    <Providers
      theme={DarkTheme}
      client={queryClient}
    >
      <Main />
    </Providers>
  );
}

export default App;
