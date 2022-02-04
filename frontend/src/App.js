import Header from './Components/Navbar';
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import QA from './Screens/QA';
import ProjectsPage from './Screens/ProjectPage';
import './App.css';
import CodingQuestions from './Screens/CodingQuestions';
import ContributeQuestion from './Screens/ContributeQuestion';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import SearchPage from './Screens/SearchPage';
import Profile from './Screens/Profile';
import { useContext } from 'react';
import { Context } from './Context/AuthContext';

function App() {

  const {user} = useContext(Context);

  return (

    <>
      <BrowserRouter>

      <Header />
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>

        <Routes>
          <Route exact path="/login" element={user ?<Home/> :  <Login/>  } />
        </Routes>

        <Routes>
          <Route exact path="/register" element={user ? <Home/> : <Signup/>} />
        </Routes>

        <Routes>
          <Route exact path="/qa" element={<QA/>} />
        </Routes>

        <Routes>
          <Route exact path="/projects" element={<ProjectsPage/>} />
        </Routes>

        <Routes>
          <Route exact path="/coding" element={<CodingQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/contribute" element={<ContributeQuestion/>} />
        </Routes>

        <Routes>
          <Route exact path="/search" element={<SearchPage/>} />
        </Routes>

        <Routes>
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
