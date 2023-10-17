import React,{useState} from 'react';
import UserNav from '../../Componant/Admin/UserCrud/UserNav'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


                      //this is user data added operation page
function UserAdd() {
    const notify = (msg) => {
    toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
    hideProgressBar: true,
      closeOnClick: false,
      auseOnHover: true,
      draggable: false,
       progress: undefined,
      theme: 'colored'
     });
    }

   
    const navigate  = useNavigate();

     //this type of hooks used for hold the data
    const [user, setUser] = useState({
    pname: "",
    pemail: "",
    password: "",  
   
  });
  
  const {pname,pemail,password} = user;

  const onInputChange = (e) =>{

    setUser({...user,[e.target.name]: e.target.value})
  }

  const onSubmit = async(e)  => {
    e.preventDefault();
    console.log(user);
   
    //save user data
    await axios.post("http://localhost:8081/patient/register",user);
    notify("Added successfully..")
    navigate("/home")

  }
 
    return (
        <div>
        <UserNav/>
           <div className='container'>
             <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Add User</h3>
                    <div className="card-body">
                    <form 
                    onSubmit={e => onSubmit(e)}
                    >
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter  Username"
                                name="pname"
                                 value={pname}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter  Email"
                                name="pemail"
                                 value={pemail}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="password"
                                 value={password}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                      
          <button className="btn btn-primary btn-block mt-3">Add User</button>
        </form>
                    </div>
                </div>
             </div>
           </div>
    </div>
    );
}

export default UserAdd;