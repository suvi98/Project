import React,{useState,useEffect} from 'react';
import AppoNav from '../../Componant/Admin/UserCrud/AppoNav'
import axios from "axios";
import {useNavigate ,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function BookAppEdit() {

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
    const {ap_id}=  useParams();

    const [user, setUser] = useState({
    dname: "",
    pname: "",
    mobNo: "",  
    date:"",
    time:"",
    status:""
  });
  
        const {dname,pname,mobNo,date,time,status} = user;

        const onInputChange = (e) =>{

            setUser({...user,[e.target.name]: e.target.value})
        }
                useEffect(() => {
                    loadUser();
                }, []);

  
        const loadUser = async () => {
            //fetch data by id
            const result = await axios.get(`http://localhost:8083/app/findById/${ap_id}`);
             setUser(result.data);
        };

        const onSubmit = async(e)  => {
            e.preventDefault();
            console.log(user);
        
            //update data by id
            await axios.put(`http://localhost:8083/app/update/${ap_id}`, user);
            notify("Update Successfully..")
            navigate("/bookAppoinment")

        }
 
    return (
        <div>
        <AppoNav/>
           <div className='container'>
             <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Edit User</h3>
                    <div className="card-body">
                    <form 
                    onSubmit={e => onSubmit(e)}
                    >
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Username"
                                name="dname"
                                 value={dname}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="pname"
                                 value={pname}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="mobNo"
                                 value={mobNo}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="date"
                                 value={date}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="time"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="time"
                                 value={time}
                                onChange={e => onInputChange(e)}
                                />
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="status"
                                 value={status}
                                onChange={e => onInputChange(e)}
                                />
                                
                            </div>
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

export default BookAppEdit;