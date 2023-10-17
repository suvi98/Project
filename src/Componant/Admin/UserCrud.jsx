import React ,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                //this is user crud operation page
function UserCrud() {

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
    // const {p_id}=  useParams();

    const opneAdd =()=>{

        navigate('/addUser');
    }
     //this type of hooks used for hold the data
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
      }, []);

      //fetch all data 
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/patient/findAll");
        setUser(result.data.reverse());
      };

      //delete data by id
     const  deleteUser = async p_id =>{

        await axios.delete(`http://localhost:8081/patient/delete/${p_id}`);
        
        notify("Deleted Successfully...")
        loadUsers();

     }
    return (
        <div>
                 <div className="container">
                 <div className="py-4">
                <h1>User List</h1>
                <button onClick={opneAdd} className="btn btn-primary " style={{display:"flex"}}>Add User</button>
                <table class="table border shadow" style={{marginTop:"10px"}}>
                <thead class="thead-dark" style={{background:"black",color:"white"}}>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.pname}</td>
                        <td>{user.pemail}</td>
                        <td>{user.password}</td>
                        <td>
                       
                        <Link
                            class="btn btn-primary mr-5" style={{marginRight:"15px"}}
                            to={`/editUser/${user.p_id}`}>
                            Edit
                        </Link>
                        <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(user.p_id)}
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

export default UserCrud;