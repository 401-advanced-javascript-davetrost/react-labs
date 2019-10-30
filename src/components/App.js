import React from 'react';
import Header from './header';
import Footer from './footer';
import CharacterList from './character-list';

const App = () => (
  <React.Fragment>
    <Header />
    <CharacterList />
    <Footer />
  </React.Fragment>
);

export default App;
