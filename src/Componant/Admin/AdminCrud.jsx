import React ,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderUser from './HeaderUser';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                          //this is admin crud operation page
function AdminCrud() {


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
    // const {a_id}=  useParams();

    const opneAdd =()=>{

        navigate('/addAdmin');
    }
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
      }, []);

      
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/admin/get");
        setUser(result.data.reverse());
      };

     const  deleteUser = async a_id =>{

        await axios.delete(`http://localhost:8081/admin/delete/${a_id}`);
        notify("Delete Successfully...")
        loadUsers();
     }
   
    return (
        <div>
            <HeaderUser/>
            <div className="container">
            <div className="py-4">
                <h1>Admin List</h1>
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
                        <td>{user.aname}</td>
                        <td>{user.aemail}</td>
                        <td>{user.adpassword}</td>
                        <td>
                        {/* <Link class="btn btn-primary mr-5" to={`/users/${user.a_id}`}>
                            View
                        </Link> */}
                        <Link
                            class="btn btn-primary mr-5" style={{marginRight:"15px"}}
                            to={`/editAdmin/${user.a_id}`}>
                            Edit
                        </Link>
                        <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(user.a_id)}
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


export default AdminCrud;