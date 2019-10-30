import React from 'react';
import Header from './header';
import Footer from './footer';
import Character from './character';

const App = () => (
  <React.Fragment>
    <Header />
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/327.jpeg"
      name="Slow Mobius"
      species="Humanoid" />
    <Footer />
  </React.Fragment>
);

export default App;
