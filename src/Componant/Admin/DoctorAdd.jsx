import React,{useState} from 'react';
import DoctorNav from '../../Componant/Admin/UserCrud/DoctorNav'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function DoctorAdd() {

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

    const [user, setUser] = useState({
    dname: "",
    city: "",
    exp: "",  
    address:"",
    fees:"",
    profession:"",
    date:"",
    rating:"",
    img:""
  });
  
  const {dname,city,exp,address,fees,profession,date,rating,img} = user;

  const onInputChange = (e) =>{

    setUser({...user,[e.target.name]: e.target.value})
  }

  const onSubmit = async(e)  => {
    e.preventDefault();
    console.log(user);
   
    await axios.post("http://localhost:8082/doctor/save",user);
    notify("Added Successfully...")
    navigate("/doctorCrud")

  }
 
    return (
        <div>
        <DoctorNav/>
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
                                name="dname"
                                 value={dname}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter city"
                                name="city"
                                 value={city}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Experience"
                                name="exp"
                                 value={exp}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Address"
                                name="address"
                                 value={address}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Fees"
                                name="fees"
                                 value={fees}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Profession"
                                name="profession"
                                 value={profession}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter Profession"
                                name="date"
                                 value={date}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Image Link"
                                name="img"
                                 value={img}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Rating"
                                name="rating"
                                 value={rating}
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

export default DoctorAdd;