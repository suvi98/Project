import React,{useState} from 'react';
import Nav from './Nav/Nav';
import './Style.css'
import {Status} from "../../service/user-service"
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                            // this is staus page, here user can  check appointment status

function FindDoctors() {

    //tostify function
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

         //tostify function
        const notify1 = (msg) => {
            toast.error(msg, {
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

    //this type of hooks used for hold the data      
    const [users, setUser] = useState([]);
    
    
    //this type of hooks used for hold the data
      const [find , setFind] =useState({
        ap_id:'',
      
    })


    const {ap_id} = find;

    //use for set the hooks 
    const handleChange = (e) =>{

        setFind({...find,[e.target.name]: e.target.value})
    }

    //this is form submit function
    const handleSubmit = (e) =>{
        //for security purpose
        e.preventDefault();
        console.log(find);

        
          //this is function called Status function which are  fetch the url
        Status(find).then((res)=>{

            console.log(res,"eeeeeeeeee");
         
            //if getting null value this alert popup
            if(res === ''){
                notify1("Not found");
            }
            setUser(res);
        })
    }
   
    
          //this is function called deleteUser function which are  fetch the url
    const  deleteUser = async ap_id =>{

        alert("Are you sure you want to delete the Appointment.")
         await axios.delete(`http://localhost:8083/app/delete/${ap_id}`);
         notify("Appintment Id: "+ap_id+" Cancle Successfully" );
        

     }
  
    return (
        <div className='status'>
            <Nav/>
            <div>
            <form onSubmit={handleSubmit}>

                <span className='city'>
                <input type="search" placeholder='Enter Appointment ID' className='mt-5' name="ap_id" value={ap_id}   onChange={e => handleChange(e)}/>
                <FaSearch/>
                </span>
                
                <button className='find-subButton btn btn-primary mr-5'>Serach</button>
            </form>
            <div className="container find-doctors">
                 <div className="py-4">
                <h4>Appointment Status</h4>
             
                <div class="table border shadow" style={{  marginTop: "10px",
                    background: "white",
                        opacity: "0.7"}}>
                                
                    <div className="row find-lind mt-3">
                        <div className="col-md-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" width={200} alt=""></img>
                        </div>
                        <div className="col-md-8 find-doctor-6 mt-3">
                            <div className="row ">
                              <span>Appintment Id:</span><span>{users.ap_id}</span>     <br />   
                           </div>
                           <div className="row">
                             <span> Dr.Name:</span><span><b>{users.dname}</b></span>        <br />   
                           </div>
                           <div className="row">
                             <span>Patient Name:</span><span><b>{users.pname}</b></span>        <br />   
                           </div>      
                           <div className="row">
                                 <span>Date:</span><span>{users.date} </span> <br />   
                           </div>
                           <div className="row">
                                 <span>Time:</span><span>{users.time}  </span> <br />   
                           </div>
                           <div className="row">
                              <span>Stutus:</span><span id='status'>{users.status} </span> <br />
                           </div> 
                           <div className="">
                           <button className='find-subButton btn btn-primary mr-5'
                             onClick={() => deleteUser(users.ap_id)}>Cancle Appointment</button>
                           </div> 
                        </div>

                    </div>
                
                   
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default FindDoctors;