import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default App;
