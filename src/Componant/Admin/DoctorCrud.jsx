import React ,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderUser from './HeaderUser';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
                          //this is doctor crud operation page
function DoctorCrud() {
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
    // const {d_id}=  useParams();

    const opneAdd =()=>{

        navigate('/doctorAdd');
    }
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
      }, []);

      
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8082/doctor/findAll");
         setUser(result.data.reverse());

        console.log(result.data);
      };

     const  deleteUser = async d_id =>{

        //delete  doctor by id
        await axios.delete(`http://localhost:8082/doctor/delete/${d_id}`);
        notify("Delete successfully...")
        loadUsers();
     }
   
    return (
        <div>
            <HeaderUser/>
            <div className="container">
            <div className="py-4">
                <h1>Doctor List</h1>
                <button onClick={opneAdd} className="btn btn-primary " style={{display:"flex"}}>Add User</button>
                <table class="table border shadow" style={{marginTop:"10px"}}>
                <thead class="thead-dark" style={{background:"black",color:"white"}}>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Address</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Profession</th> 
                    <th scope="col">Date</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Image</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.dname}</td>
                        <td>{user.city}</td>
                        <td>{user.exp}</td>
                        <td>{user.address}</td>
                        <td>{user.fees}</td>
                        <td>{user.profession}</td>
                        <td>{user.date}</td>                        
                        <td>{user.rating}</td>
                        <td ><img src={user.img} width={100} alt=""></img> </td>
                        <td>
                        {/* <Link class="btn btn-primary mr-5" to={`/users/${user.a_id}`}>
                            View
                        </Link> */}
                        <Link
                            class="btn btn-primary mr-5" style={{marginRight:"15px"}}
                            to={`/doctorEdit/${user.d_id}`}>
                            Edit
                        </Link>
                        <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(user.d_id)}
                        >
                            Delete
                        </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
    </div>
        </div>
    );
}


export default DoctorCrud;