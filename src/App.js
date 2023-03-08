import { RouterProvider } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { router } from './Routes/Routes';

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
