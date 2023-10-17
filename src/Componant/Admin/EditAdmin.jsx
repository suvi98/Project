import React,{useState,useEffect} from 'react';
import Nav from '../../Componant/Admin/UserCrud/Nav'
import axios from "axios";
import {useNavigate ,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


                //edit admin page

function EditAdmin() {

    // tostify function
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
    const {a_id}=  useParams();

     //this type of hooks used for hold the data
    const [user, setUser] = useState({
    aname: "",
    aemail: "",
    adpassword: "",  
   
  });
  
        const {aname,aemail,adpassword} = user;

        const onInputChange = (e) =>{

            setUser({...user,[e.target.name]: e.target.value})
        }
                useEffect(() => {
                    loadUser();
                }, []);

        //fetch all data
        const loadUser = async () => {
            const result = await axios.get(`http://localhost:8081/admin/findbyId/${a_id}`);
             setUser(result.data);
        };

        const onSubmit = async(e)  => {
            e.preventDefault();
            console.log(user);
        
             //find data by id
            await axios.put(`http://localhost:8081/admin/update/${a_id}`, user);
            notify("Update Successfully...")
            navigate("/adminCrud")

        }
 
    return (
        <div>
        <Nav/>
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
                                name="aname"
                                 value={aname}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="aemail"
                                 value={aemail}
                                onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                name="adpassword"
                                 value={adpassword}
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

export default EditAdmin;