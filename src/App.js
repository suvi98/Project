
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/Admin/Login';
import Register from './Pages/Admin/Register';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import HeaderUser from './Componant/Admin/HeaderUser'
import AdminCrud from './Componant/Admin/AdminCrud'
import BookAppoinment from './Componant/Admin/BookAppoinment'
import EditAdmin from './Componant/Admin/EditAdmin' 
import AddUser from './Componant/Admin/UserAdd'
import AddAdmin from './Componant/Admin/AddAdmin'
import UserEdit from './Componant/Admin/UserEdit'
import LoginUser from './Pages/User/LoginUser'
import RegisterUser from './Pages/User/RegisterUser'
import HomePageUser from './Pages/HomePageUser'
import FindDoctors from './Componant/User/FindDoctors'
import VideoConsult from './Componant/User/VideoConsult'
import BookAppointment from './Componant/User/BookAppointment'
import DoctorCrud from './Componant/Admin/DoctorCrud'
import DoctorAdd from './Componant/Admin/DoctorAdd'
import DoctorEdit from './Componant/Admin/DoctorEdit'
import Status from './Componant/User/Status'
import BookAppEdit from './Componant/Admin/BookAppEdit'

function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
                
                <Route exact path='/' element={<Welcome/>}></Route>   

                   {/*          Admin */}
                <Route exact path='/login' element={<Login/>}></Route>
                <Route exact path='/register' element={<Register/>}></Route>

                                   {/* user */}
                <Route exact path='/loginUser' element={<LoginUser/>}></Route>                
                <Route exact path='/registerUser' element={<RegisterUser/>}></Route>
                
 
                                       {/*          Admin */}
                                       
                <Route exact path='/home' element={<Home/>}></Route>
                <Route exact path='/headerUser' element={<HeaderUser/>}></Route>
                <Route exact path='/adminCrud' element={<AdminCrud/>}></Route>
                <Route exact path='/bookAppoinment' element={<BookAppoinment/>}></Route>
                <Route exact path='/doctorCrud' element={<DoctorCrud/>}></Route>  
        

                <Route exact path='/addAdmin' element={<AddAdmin/>}></Route>                
                <Route exact path='/editAdmin/:a_id' element={<EditAdmin/>}></Route>

                <Route exact path='/addUser' element={<AddUser/>}></Route>  
                <Route exact path='/editUser/:p_id' element={<UserEdit/>}></Route>  

                <Route exact path='/doctorAdd' element={<DoctorAdd/>}></Route>  
                <Route exact path='/doctorEdit/:d_id' element={<DoctorEdit/>}></Route>  

                <Route exact path='/bookAppEdit/:ap_id' element={<BookAppEdit/>}></Route>  



                                      {/* user */}
                                      
                <Route exact path='/homeUser' element={<HomePageUser/>}></Route>
                <Route exact path='/findDoctors' element={<FindDoctors/>}></Route>  
                <Route exact path='/videoConsult' element={<VideoConsult/>}></Route>  
                <Route exact path='/status' element={<Status/>}></Route>                 
                <Route exact path='/bookAppointment/:d_id' element={<BookAppointment/>}></Route>  
        
                
                
                
          </Routes>
      </Router>
    </div>
  );
}

export default App;
