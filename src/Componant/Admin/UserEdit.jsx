import React,{useState,useEffect} from 'react';
import UserNav from '../../Componant/Admin/UserCrud/UserNav'
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


                        //this is user edit operation page
function UserEdit() {

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
    const {p_id}=  useParams();

     //this type of hooks used for hold the data
    const [user, setUser] = useState({
    pname: "",
    pemail: "",
    password: "",  
   
  });

  useEffect(() => {
    loadUser();
}, []);
  const {pname,pemail,password} = user;

  const onInputChange = (e) =>{

    setUser({...user,[e.target.name]: e.target.value})
  }

  //find data by id
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/patient/findByID/${p_id}`);
     setUser(result.data);

};
  const onSubmit = async(e)  => {
    e.preventDefault();
    console.log(user);
   
    //edit data by id
    await axios.put(`http://localhost:8081/patient/update/${p_id}`, user);
    notify("Edit Successfully")
    navigate("/home")

  }
 
    return (
        <div>
        <UserNav/>
           <div className='container'>
             <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Update User</h3>
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
                      
          <button className="btn btn-primary btn-block mt-3">Edit User</button>
        </form>
                    </div>
                </div>
             </div>
           </div>
    </div>
    );
}

export default UserEdit;