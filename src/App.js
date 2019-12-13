import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import { SignInGoogle } from './SignInWithGoogle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route path='/' component={SignInGoogle} />
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
