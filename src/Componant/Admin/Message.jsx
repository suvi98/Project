// import React ,{ useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import HeaderUser from './HeaderUser';
// import {useNavigate,useParams} from 'react-router-dom'

// function Message() {
//     const navigate  = useNavigate();
//     const {d_id}=  useParams();

//     const opneAdd =()=>{

//         navigate('/doctorAdd');
//     }
//     const [users, setUser] = useState([]);

//     useEffect(() => {
//         loadUsers();
//       }, []);

      
//     const loadUsers = async () => {
//         const result = await axios.get("http://localhost:8082/doctor/findAll");
//          setUser(result.data.reverse());

//         console.log(result.data);
//       };

//      const  deleteUser = async d_id =>{

//         await axios.delete(`http://localhost:8082/doctor/delete/${d_id}`);
//         loadUsers();
//      }
   
//     return (
//         <div>
//             <HeaderUser/>
//             <div className="container">
//             <div className="py-4">
//                 <h1>Message List</h1>
//                 <button onClick={opneAdd} className="btn btn-primary " style={{display:"flex"}}>Add User</button>
//                 <table class="table border shadow" style={{marginTop:"10px"}}>
//                 <thead class="thead-dark" style={{background:"black",color:"white"}}>
//                     <tr>
//                     <th scope="col">Id</th>
//                     <th scope="col">UserName</th>
//                     <th scope="col">Message</th>
                   
//                     <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                     <tr>
//                         <th scope="row">{index + 1}</th>
//                         <td>{user.username}</td>
//                         <td>{user.message}</td>
                        
//                         <td>
                     
//                         <Link
//                             class="btn btn-primary mr-5" style={{marginRight:"15px"}}
//                             to={`/doctorEdit/${user.m_id}`}>
//                             Edit
//                         </Link>
//                         <Link
//                             class="btn btn-danger"
//                             onClick={() => deleteUser(user.m_id)}
//                         >
//                             Delete
//                         </Link>
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//                 </table>
//             </div>
//     </div>
//         </div>
//     );
// }


// export default Message;