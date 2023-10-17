import React from 'react';
import { useState } from 'react';
import { signUp } from '../../service/user-service';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

            // this is admin side register page

function Register() {

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

    const navigate  = useNavigate();

    //navigate to login page
    const handleLogin=()=>{

        navigate('/login');
    }

    
    //this type of hooks used for maintain the data
    const [reg,setRegisterData] = useState({
        aname:'',
        aemail:'',
        adpassword:''
    })

    //whatever input was put in input field this data set in hooks 
    const handleChange=(e)=>{
        e.preventDefault();
        
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...reg};
        newFormData[fieldName] = fieldValue;

        setRegisterData(newFormData);
    }
    
     //this is form submit function
    async function submitForm(e){
        //this is for security purpose
        e.preventDefault();

          //this is one type validation for form , user needed put all the data in form
        if(reg.aemail.trim() === '' || reg.adpassword.trim() === '' || reg.aname.trim() === ''){
            notify("give proper information!");
            return;
        }

        //this is function called signUp function which are already fetch the url 
        signUp(reg).then((resp)=>{
            console.log(resp,"Added");
            notify("Register Successfully..")

            navigate('/login');
        })
        .catch(error =>{
            console.log(error);
        })
    }



    return (
        <div className='Register-page'>
            <div className='Login-page '>

               <h3 className='mt-3'>Admin Register</h3>
                    <form  onSubmit={submitForm}   className='Login-form mt-3'>
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='aname'>
                            Name
                            </label>
                            <input className='form-control' type="text"id="aname" name="aname" placeholder='abc@gmailcom'
                                onChange={handleChange}
                            required/>
                    </div>
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='aemail'>
                            Email
                            </label>
                            <input className='form-control' type="email"id="aemail" name="aemail" placeholder='abc@gmailcom'
                                onChange={handleChange}
                            required/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='adpassword'>
                            Password
                        </label>
                        <input className='form-control' type="text"id="adpassword" name="adpassword" placeholder='password'
                                onChange={handleChange}  
                        required/>

                    </div>

                            <button className='btn btn-danger mt-3' 
                            //   onClick={handleSubmit}
                            >Submit</button>
                            <h6 className='mt-3' 
                                onClick={handleLogin}
                            > Login here</h6>
                        
                    </form>
            </div>
        </div>
    );
}

export default Register;