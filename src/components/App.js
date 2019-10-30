import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CharacterList from './characters/Character-list';

const App = () => (
  <React.Fragment>
    <Header />
    <CharacterList />
    <Footer />
  </React.Fragment>
);

export default App;
