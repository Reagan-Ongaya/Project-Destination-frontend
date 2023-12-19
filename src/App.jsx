import { Routes, Route} from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { AddDestination } from './pages/AddDestination';


function App() {
  return (
    <main>

      {/* Navbar */}
      <Navbar />
        
      <Box bg={'black'} h={'fit-content'}>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route  path='add-destination' element={<AddDestination />}/>

        </Routes>
      </Box>
    </main>
  )
}

export default App;
