import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Welcome.css'


                    // this is welcome page

function HomePage() {

    //defianed useNanigate function as variable
    const navigate  = useNavigate();

     //this function used for navigate to login page at admin side
    const handleAdmin=()=>{

        navigate('/login');
    }

    //this function used for navigate to login page at user side
    const handleUser=()=>{

        navigate('/loginUser');
    }

     return (
    <div id='Welcome-page'>
     <div class="row main ">
     <h2 id='Wpt'>Welcome To Capstone Project G8</h2>
          <div class="column">
    
       <p>
     
            {/* user logo */}
         <img src="https://www.wealthengine.com/wp-content/uploads/2018/07/New-Prospects@4x.png" onClick={handleUser} alt=""/>
     
      
     <h2 className='wel-usere'>USER</h2>
         </p>
   
       </div>
     
      <div class="column">
     
     <p>
     
    {/* admin logo */}
     
         <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" onClick={handleAdmin} alt=""/>
     
    
         <h2 className='wel-usere'>ADMIN</h2>
         </p>
     
   
      </div>
     
      </div>
     
     
      </div>
      );
     }
    


export default HomePage;