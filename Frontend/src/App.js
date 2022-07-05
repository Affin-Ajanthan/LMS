import { BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Student from './Components/Student';


function App() {
  return (
  <BrowserRouter>
  <Container>
    
   <Student/>

  </Container>
  </BrowserRouter>
  );
}

export default App;