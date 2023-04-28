import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

// import pages
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import ContactProfilePage from './pages/ContactProfilePage/ContactProfilePage';
import FormPage from './pages/FormPage/FormPage';

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

        <Route path='/new' element={ <FormPage /> } />

        <Route path='/contact' element={ <ContactProfilePage /> }/>

      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
