import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';


function App() {

  return (
    <BrowserRouter>

      <Navigation />

      <Routes>

        <Route path="/" exact Component={NotesList} />
        <Route path="/edit/:id" Component={CreateNote} />
        <Route path="/create" Component={CreateNote} />
        <Route path="/user" Component={CreateUser} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;
