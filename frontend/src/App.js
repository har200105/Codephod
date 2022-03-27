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
import { useContext, useEffect } from 'react';
import { Context } from './Context/AuthContext';
import Verify from './Screens/Verify';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Redux/Actions/userAction';
import ForgetPassword from './Screens/ForgetPassword';
import AddWorkshop from './Screens/AddWorkshop';

function App() {

  const dispatch = useDispatch();
  const {user,isAuthenticated} = useSelector((state) => state.getUserReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (

    <>
      <BrowserRouter>

      <Header />
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>

        <Routes>
          <Route exact path="/login" element={isAuthenticated ? <Home/> :  <Login/>  } />
        </Routes>

        <Routes>
          <Route exact path="/register" element={isAuthenticated ? <Home/> : <Signup/>} />
        </Routes>

        <Routes>
          <Route exact path="/qa" element={<QA/>} />
        </Routes>

        <Routes>
          <Route exact path="/forgetPassword" element={<ForgetPassword/>} />
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
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>

        <Routes>
          <Route exact path="/addWorkshop" element={<AddWorkshop/>} />
        </Routes>

         <Routes>
          <Route exact path="/verify/:token" element={<Verify/>}/>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
