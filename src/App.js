
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './conponents/Courses/Courses';
import Footer from './conponents/Footer/Footer';
import Header from './conponents/Header/Header';

import HomePage from './conponents/Homepage/HomePage';
import Login from './conponents/Login/Login/Login';
import Signup from './conponents/Login/Signup/Signup';
import NotFound from './conponents/NotFound/NotFound';
import RequireAuth from './conponents/RequireAuth/RequireAuth';
import ServiceDatials from './conponents/ServiceDatials/ServiceDatials';
// import RequireAuth from './conponents/Login/RequireAuth/RequireAuth';

import CheckOut from './conponents/CheckOut/CheckOut';
import KidsService from './conponents/KidsService/KidsService';
import KidsDetals from './conponents/KidsTeaching/KidsDetals';
import Footerend from './conponents/Footer/Footerend';






function App() {




  return (
    <div className="">
  
  <Header></Header>

      <Routes>
  <Route path='/' element={<RequireAuth><HomePage></HomePage></RequireAuth>}></Route>
  <Route path='Courses/:CoursesId' element={<ServiceDatials></ServiceDatials>}></Route>
  <Route path='HomePage' element={<HomePage></HomePage>}></Route>
  <Route path='Courses' element={<Courses></Courses>} ></Route>
  <Route path='CheckOut'element={<RequireAuth> <CheckOut></CheckOut></RequireAuth>}></Route>
  <Route path='KidsService'element={<RequireAuth> <KidsService></KidsService></RequireAuth>}></Route>
  <Route path='KidsDetals'element={<RequireAuth> <KidsDetals></KidsDetals></RequireAuth>}></Route>

 

  <Route path='Login' element={<Login></Login>} ></Route>
  <Route path='KidsDetals' element={<KidsDetals></KidsDetals>} ></Route>
  <Route path='Signup' element={<Signup></Signup>} ></Route>
  <Route path='CheckOut' element={  <CheckOut></CheckOut>} ></Route>

  <Route path='*' element={<NotFound></NotFound>} ></Route>
  




      </Routes>
     
    

    
<Footer></Footer>
<Footerend></Footerend>


    </div>
  );
}

export default App;
