import React from 'react';
import NavBar from './components/NavBar';
import Form from  './components/Form';
import Filter from  './components/Filter';

import './App.css';
import './styles/base.css';
import './styles/colors.css';
import './styles/utilities.css';
import './styles/home.css';

const App = () => {

    return (
      <div>
        <NavBar />
        <Form />
        <Filter />
      </div>
    );
}

export default App;
