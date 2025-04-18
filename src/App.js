

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import Dataprovider from './context/Dataprovider';



function App() {
  
  return (
    <Dataprovider>
             <Header/>
             <Box style={{marginTop:54}}>
             <Home />

             </Box>
             
    </Dataprovider>
    

    
  );
}

export default App;
