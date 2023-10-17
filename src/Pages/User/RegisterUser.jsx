import React from 'react';
import { useState } from 'react';
import { signUpUser } from '../../service/user-service';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

                    // this is user side register page

function RegisterUser() {

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

    //this function used for navigate page again on login page
    const handleLogin=()=>{

        navigate('/loginUser');
    }

    //this type of hooks used for maintain the data
    const [reg,setRegisterData] = useState({
        pname:'',
        pemail:'',
        password:''
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

        e.preventDefault();

        //this is one type validation for form , user needed put all the data in form
        if(reg.pemail.trim() === '' || reg.password.trim() === '' || reg.pname.trim() === ''){
            notify("give proper information!");
            // toast.error("please!!!!!!!")
            return;
        }

        //this is function called signUpUser function which are already fetch the url 
        signUpUser(reg).then((resp)=>{
            console.log(resp,"Added");
            notify("Register Successfully..")

            navigate('/loginUser');
        })
        .catch(error =>{
            console.log(error);
        })
    }



    return (
        <div className='Register-page'>
            <div className='Login-page '>

               <h3 className='mt-3'>User Register</h3>
                    <form  onSubmit={submitForm}   className='Login-form mt-3'>
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='pname'>
                            Name
                            </label>
                            <input className='form-control' type="text"id="pname" name="pname" placeholder='UserName'
                                onChange={handleChange}
                            required/>
                    </div>
                    <div className='mb-3'>
                            <label className='form-label' htmlFor='pemail'>
                            Email
                            </label>
                            <input className='form-control' type="email"id="pemail" name="pemail" placeholder='abc@gmailcom'
                                onChange={handleChange}
                            required/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor='password'>
                            Password
                        </label>
                        <input className='form-control' type="text"id="password" name="password" placeholder='password'
                                onChange={handleChange}  
                        required/>

                    </div>

                            <button className='btn btn-danger mt-3' 
                            //   onClick={handleSubmit}
                            >Submit</button>
                            <h6 className='mt-3' 
                                onClick={handleLogin}
                            > Login here?</h6>
                        
                    </form>
            </div>
        </div>
    );
}

export default RegisterUser;