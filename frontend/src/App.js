import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation'
import CreateCategory from './components/CreateCategory';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';


function App() {

  return (
    <Router>

    <Navigation></Navigation>

    <div className="container p-4">
      
     <Routes>
     <Route path="/" exact element={<NotesList />} />
      <Route path="/edit/:id" element={<CreateNote />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/user" element={<CreateUser />} />
      <Route path="/categories" element={<CreateCategory />} />
     </Routes>
      
    </div>

    </Router>
    
  );

}

export default App;
