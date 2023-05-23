import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen bg-base-200'>
          <div className='py-4'>
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
