import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Navbar } from './components/Layouts/Navbar';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='mockup-window border bg-base-300'>
          <div className='flex flex-col justify-center bg-base-200'>
            <Navbar></Navbar>

            <div className='px-4 py-8'>
              <Router />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
