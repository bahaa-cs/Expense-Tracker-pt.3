import React from 'react';
import NavBar from './components/NavBar';
import Body from  './components/Body';

import './App.css';
import './styles/base.css';
import './styles/colors.css';
import './styles/utilities.css';
import './styles/home.css';

const App = () => {

    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
}

export default App;
