import React ,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderUser from './HeaderUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                          //this is bookappointment crud operation page
function BookAppoinment() {

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
        

  


    const [users, setUser] = useState([]);

    //fetching data
    useEffect(() => {
        loadUsers();
      }, []);

      //function fetch all the book appointment data
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8083/app/findAll");
        setUser(result.data);
      };

       //function fetch delete book appointment data
     const  deleteUser = async ap_id =>{

        await axios.delete(`http://localhost:8083/app/delete/${ap_id}`);
        notify("Delete Successfully...")
        loadUsers();
     }
   
    return (
        <div>
            <HeaderUser/>
            <div className="container">
            <div className="py-4">
                <h1>Appointment List</h1>

                <table class="table border shadow" style={{marginTop:"10px"}}>
                <thead class="thead-dark" style={{background:"black",color:"white"}}>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Dr.Name</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Staus</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr>
                        <th>{user.ap_id}</th>
                        <td>{user.dname}</td>
                        <td>{user.pname}</td>
                        <td>{user.date}</td>
                        <td>{user.time}</td>
                        <td>{user.status}</td>
                        <td>
                        {/* <Link class="btn btn-primary mr-5" to={`/users/${user.a_id}`}>
                            View
                        </Link> */}
                        <Link
                            class="btn btn-primary mr-5" style={{marginRight:"15px"}}
                            to={`/bookAppEdit/${user.ap_id}`}>
                            Edit
                        </Link>
                        <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(user.ap_id)}
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


export default BookAppoinment;