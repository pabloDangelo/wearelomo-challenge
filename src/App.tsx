import './App.css';
import Header from './components/pages/header/Header';
import { BrowserRouter } from "react-router-dom";
import { WebRoutes } from './components/WebRoutes'
import { Container } from 'react-bootstrap';

function App() {
    
  return (

    <Container className="App">
        <BrowserRouter>
          <Header/>
            <WebRoutes/>
        </BrowserRouter>
      </Container>  
      
  );
}

export default App;



