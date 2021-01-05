import React from 'react';
import Container from '../../shared/Container';
import Header from '../Header';
import ProductsCRUD from '../Products/ProductsCRUD';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>

        <Container>
          <ProductsCRUD/>
        </Container>
    </div>
  )
}

export default App