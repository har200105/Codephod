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

function App() {

  return (

    <>
      <BrowserRouter>

      <Header />
      
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>

        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>


        <Routes>
          <Route path="/qa" element={<QA/>} />
        </Routes>

        <Routes>
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>

        <Routes>
          <Route path="/coding" element={<CodingQuestions/>} />
        </Routes>

        <Routes>
          <Route path="/contribute" element={<ContributeQuestion/>} />
        </Routes>

        <Routes>
          <Route path="/search" element={<SearchPage/>} />
        </Routes>

        <Routes>
          <Route path="/profile" element={<Profile/>} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
