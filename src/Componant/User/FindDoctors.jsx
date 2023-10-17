import React,{useState} from 'react';
import Nav from './Nav/Nav';
import './Style.css'
import { Link } from "react-router-dom";
import {DoctorData} from "../../service/user-service"
import { FaSearch,FaRupeeSign ,FaThumbsUp, FaCalendar} from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                        //this find doctor page, Here find the doctor as per user requirment

function FindDoctors() {

    //tostify function
    const notify = (msg) => {
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
        city:'',
        profession:'',
        date:''
    })

    //declaration of variable
    const {city,profession,date} = find;

    //use for set the hooks 
    const handleChange = (e) =>{

        setFind({...find,[e.target.name]: e.target.value})
    }

     //this is form submit function
    const handleSubmit = (e) =>{

         //for security purpose
        e.preventDefault();

        //this is function called DoctorData function which are  fetch the url
        DoctorData(find).then((res)=>{
            

            //if getting null value this alert popup
            if(res === ''){
                notify("Data Not found")
            }

            setUser(res);
            console.log(users);
        })
    }
    return (
        <div>
            <Nav/>
            <div className='find-docters'>
            <form onSubmit={handleSubmit}>

                <span className='city'>
                   <input type="search" placeholder='City' className='mt-5' name="city" value={city}   onChange={e => handleChange(e)}/>
                  {/* this is fa fa icons */}
                   <FaSearch/>
                </span>
                <span className='city'>
                    <input type="search" placeholder='Doctors' className='mt-5' name='profession' value={profession} onChange={e => handleChange(e)}/>
                    <FaSearch/>
                </span>
                <span className='city'>
                <input type="date" placeholder='Date' className='mt-5' name='date' value={date} onChange={e => handleChange(e)}/>
             
                </span>
                <button className='find-subButton btn btn-primary mr-5'>Submit</button>
            </form>
            <div className="container find-doctors">
                 <div className="py-4">
                <h4>Available Doctors</h4>
             
                <div class="table border shadow find-table">
                {users.map((data) => (
                    <div className="row find-lind mt-3">
                        <div className="col-md-4">
                            <img src={data.img} width={170} alt=""></img>
                        </div>
                        <div className="col-md-6 find-doctor-6 mt-5">
                            <div className="row ">
                              {/* <span>ID:</span><span>{data.d_id}</span>     <br />    */}
                           </div>
                           <div className="row">
                             <span style={{    textDecoration: "underline",color: "blue"}}><b>{data.dname}</b></span>        <br />   
                           </div>
                           <div className="row">
                              <span>{data.exp} Years Experience Overall </span> <br />
                           </div>       
                           <div className="row">
                                 <span>{data.address} </span> <br />   
                           </div>
                           <div className="row">
                               <span><FaRupeeSign/>{data.fees} Consultation fee at clinic </span> <br />   
                           </div>
                           <div className="row ">
                             <span className='find-rating'><FaThumbsUp/> {data.rating} </span> <br />   
                           </div>
                         
                        </div>
                        <div className="col-md-2">
                            <div >
                                <Link
                                    class="btn btn-book " 
                                    to={`/bookAppointment/${data.d_id}`}
                                    >
                                    Book Clinic Visit
                                </Link>
                            </div>
                            <div className="container" style={{backgroundColor:""}}>
                                    <FaCalendar/>
                                    <span> Availabilty</span> <br />
                                   <strong style={{color: "darkblue"}}> {data.date}</strong> 
                            </div>
                         </div>
                    </div>
                    ))}
                   
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default FindDoctors;