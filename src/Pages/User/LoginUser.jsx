import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import { LoginDetailsUser } from '../../service/user-service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                // this is user side login page
function Login() {

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
            // tostify function
        const toastify = (msg) =>{
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

    const navigate  = useNavigate();
    //this function used for navigate page again on register page
    const handleSubmit=()=>{

        navigate('/registerUser');
    }

    //useState type of hooks
    const [logindata,setLogin] = useState({
        pemail:''  ,
        password:''
    })

    //whatever input was put in input field this data set in hooks 
    const handleloginChange=(e)=>{
        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...logindata};
        newFormData[fieldName] = fieldValue;

        setLogin(newFormData);
    }

    //this is form submit function
    async function submitLoginForm(e){

        //this is for security purpose
        e.preventDefault();
        console.log(logindata);    
       
         //this is one type validation for form , user needed put all the data in form
        if(logindata.pemail.trim() === '' || logindata.password.trim() === ''){
            notify("give proper information!");
            // toast.error("please!!!!!!!")
            return;
        }

             //this is function imported LoginDetailsUser function which are already fetch the url 
        LoginDetailsUser(logindata).then((res)=>{
           
            
            //if getting res as invalid user, it's navigate at same page otherwise navigate at next page
            if(res === "invalid user"){

                toastify(res )
                navigate('/loginUser');
            }
            else{
                localStorage.setItem("LoginUser",res)
                notify(res +" Login suceesfully")
                navigate('/homeUser');
            }
           
           
        })
        .catch(error =>{
            console.log(error);
        })
    }

    //navigate to welcome page
   const handleWlecome =()=>{
        navigate("/")
   }

    return (
        <div id='LoginUser'>
                <div className='Login-page ' >

                    <h3 className='mt-5'>User SignUp</h3>
                <form  onSubmit={submitLoginForm}   className='Login-form mt-5'>
                    
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='pemail'>
                            Email
                            </label>
                            <input className='form-control' type="email"id="pemail" name="pemail" placeholder='abc@gmailcom'
                                 onChange={handleloginChange}
                            required/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='password'>
                            Password
                        </label>
                        <input className='form-control' type="text" id="password" name="password" placeholder='password'
                                 onChange={handleloginChange}  
                        required/>

                    </div>

                       <span>     
                             <button className='btn btn-success mt-5'  style={{marginRight:"10px"}} >Submit</button>
                        </span>
                        <span>
                             <button className='btn btn-danger mt-5' 
                               onClick={handleWlecome}
                            >Cancle</button>
                            </span>
                            <h6 className='mt-5' 
                                onClick={handleSubmit}
                            > Not member? Register here</h6>
                </form>
        </div>
                   
                 
                </div>
    );
}

export default Login;