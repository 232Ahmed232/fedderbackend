import './App.css'
import React from 'react';
import { AuthProvider } from './store/Store.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Feeder from './Feeder.jsx';


function App() {




      return (
        <AuthProvider>
          
          {/* <Navigate to="/"/> */}
         <Feeder />
        
        </AuthProvider>
      )
    


 
 

}

export default App
