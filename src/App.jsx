import { Routes, Route} from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { AddDestination } from './pages/AddDestination';


function App() {
  return (
    <>

      {/* Navbar */}
      <Navbar />
        
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route  path='add-destination' element={<AddDestination />}/>

        </Routes>
      </Container>
    </>
  )
}

export default App;
