import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import './App.css';
import router from './routes/Routes';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <div>
      {
        loading ?
          <div className="flex justify-center items-center min-h-screen">
            <GridLoader color="rgb(131,58,180)" size={20} />
          </div>
          :
          <RouterProvider router={router}></RouterProvider>
      }
    </div>
  );
}

export default App;
