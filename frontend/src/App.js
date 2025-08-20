import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme } from './Themes/DarkTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Pages/Main';
import Providers from './Providers';
import VideoBackground from './Components/Baclground/VideoBackground';

const queryClient = new QueryClient(); 
function App() {
  return (
    <Providers
      theme={DarkTheme}
      client={queryClient}
    >
      <VideoBackground src={"vids/credits_18.mp4"}>
        <Main />
      </VideoBackground>
    </Providers>
  );
}

export default App;
