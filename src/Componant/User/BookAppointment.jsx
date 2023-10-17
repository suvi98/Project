import React,{useState,useEffect} from 'react';
import { useNavigate ,useParams } from 'react-router-dom'
import axios from 'axios';
import './Style.css'

                        //this is  book appointment page
function BookAppointment() {
   
    const {d_id}=  useParams();
    const navigate = useNavigate()

    
    //this type of hooks used for hold the data
    const [user, setUser] = useState({
        dname: '',
        pname:'',
        mobNo:'',
        date:'',
        time:'',
        status:'Pending'
      });

      //declared the variables
      const {dname,pname,mobNo,date,time,status} = user;

        //use for set the hooks 
      const onInputChange = (e) =>{

          setUser({...user,[e.target.name]: e.target.value})
      }

      //for fetching data on load page
      useEffect(() => {
        loadUser();
    }, []);

        //function used for find doctor by id
        const loadUser = async () => {
        const result = await axios.get(`http://localhost:8082/doctor/findById/${d_id}`);
        setUser(result.data);
        };

        //form submit function
        const onSubmit = async(e)  => {
        e.preventDefault();
        console.log(user);
    
        //called api and save the doctor data in database
       const result= await axios.post(`http://localhost:8083/app/save`, user);

     
        alert("Plase note your Appointment Id for chcking Apponitment Status \n Id: " +result.data.ap_id)
        navigate("/findDoctors")

    }

    //navigate to find doctor page
    const hadleList = () =>{
        navigate("/findDoctors")
    }
    return (

        
        <div className='Bookappoint'>
              <div className='container mt-5'>
                 <div className="row" style={{opacity:"0.8"}}>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className='text-center'>Book Appointment</h3>
                        <div className="card-body">
                        <form 
                        onSubmit={e => onSubmit(e)}
                        >
                                <div className="form-group">
                                    <label>Dr. Name</label>
                                    <input type="text" 
                                    placeholder='Dr.Name' 
                                    name="dname" 
                                    value={dname}
                                    onChange={e => onInputChange(e)}
                                    className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Patiet Name</label>
                                    <input type="text" 
                                    placeholder='Patiet Name' 
                                    name="pname" 
                                    value={pname}
                                    onChange={e => onInputChange(e)}
                                    className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Mob No.</label>
                                    <input type="number" 
                                    placeholder='Mobile No.' 
                                    name="mobNo" 
                                    value={mobNo}
                                    onChange={e => onInputChange(e)}
                                    className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Date </label>
                                    <input type="date" 
                                    placeholder='Date'
                                    name="date" 
                                    value={date}
                                    onChange={e => onInputChange(e)}
                                    className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input type="time" 
                                    placeholder='Time' 
                                    name="time"
                                    value={time}
                                    onChange={e => onInputChange(e)}
                                    className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input type="text" 
                                    placeholder='UserName' 
                                    name="status" 
                                    value= "Pending"
                                    onChange={e => onInputChange(e)}
                                    className='form-control' 
                                    />
                                </div>
                               
                              <span> <button className='btn btn-success mt-3' > Save </button> </span> 
                              <span>    <button className='btn btn-danger mt-3' onClick={hadleList}> Cancle </button></span> 
                            </form>
                        </div>
                    </div>
                 </div>
               </div>
        </div>
    );
}

export default BookAppointment;