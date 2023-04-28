import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

// import pages
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import AddContactPage from './pages/AddContactPage/AddContactPage';
import ContactProfilePage from './pages/ContactProfilePage/ContactProfilePage';
import AddEventPage from './pages/AddEventPage/AddEventPage';

// import components
import NavBar from './components/NavBar/NavBar';

// import utilities
import { getUser } from './utilities/users-service';

// import styling
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={ <MainPage /> } />

        <Route path='/new' element={ <AddContactPage /> } />

        <Route path='/contact' element={ <ContactProfilePage /> }/>

        <Route path='/contact/new' element={ <AddEventPage /> } />
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
