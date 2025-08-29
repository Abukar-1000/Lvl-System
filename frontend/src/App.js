import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme } from './Themes/DarkTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './Pages/Main';
import Providers from './Providers';
import VideoBackground from './Components/Baclground/VideoBackground';
import { RouterProvider } from 'react-router';
import Router from './Routes';

const queryClient = new QueryClient(); 
function App() {
  return (
    <Providers
      theme={DarkTheme}
      client={queryClient}
    >
      <VideoBackground src={"vids/SHINSUIS_BANKAI_1.mp4"}>
        <RouterProvider router={Router}/>
        {/* <Main /> */}
      </VideoBackground>
    </Providers>
  );
}

export default App;
