import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import { LoginDetails } from '../../service/user-service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                    // this is admin side login page
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

        navigate('/register');
    }


    //useState type of hooks maintain the data
    const [logindata,setLogin] = useState({
        aemail:''  ,
        adpassword:''
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
       
        //this is one type validation for form , user needed put all the data in form
        if(logindata.aemail.trim() === '' || logindata.adpassword.trim() === ''){
            notify("give proper information!");
            return;
        }

          //this is function called LoginDetails function which are already fetch the url 
        LoginDetails(logindata).then((res)=>{
  

            console.log(res);

            //if getting res as invalid user, it's navigate at same page otherwise navigate at next page
            if(res === "Invalid user"){

                toastify(res)
                navigate('/login');
            }
            else{
                localStorage.setItem("AdminUser",res)
                notify(res +" Login suceesfully")
                navigate('/home');
            }
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleWlecome =()=>{
        navigate("/")
   }
   
 




    return (
        <div id='admin-login'>
                <div className='Login-page mt-5'>

                    <h3 className='mt-5'>Admin SignUp</h3>
                <form  onSubmit={submitLoginForm}   className='Login-form mt-5'>
                    
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='aemail'>
                            Email
                            </label>
                            <input className='form-control' type="email"id="aemail" name="aemail" placeholder='abc@gmailcom'
                                 onChange={handleloginChange}
                            required/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='adpassword'>
                            Password
                        </label>
                        <input className='form-control' type="text" id="adpassword" name="adpassword" placeholder='password'
                                 onChange={handleloginChange}  
                        required/>

                    </div>

                            <button className='btn btn-success mt-5' 
                            >Submit</button>
                            <span>
                             <button className='btn btn-danger mt-5' 
                               onClick={handleWlecome}
                               style={{marginLeft:"10px"}} >Cancle</button>
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