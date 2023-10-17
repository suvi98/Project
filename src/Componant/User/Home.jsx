import React from 'react';
import './Home.css'
import {useNavigate}  from 'react-router-dom'


                // this is user side home page
function Home() {

  const navigate = useNavigate();

  //function used for navigate to find doctor page
  const handlefindDoctors = () =>{
    navigate("/findDoctors")
  }

   //function used for navigate to find medicines page
  const handleMedicines = () =>{
    navigate("/videoConsult")
  }

  return (

    <div id='home-user-A'>

        <div className="container mt-5">
        <div className="row home-User" id='home-banner' >  
                 <img src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="" />
        </div>
       </div>
       <div className='row mt-5' style={{width:"100%"}}>
     <div class="card homecard">
        <div class="card-body column">
               <div className='card '>
               <div class="card-title">Instant Video Consultation</div>
               <div class="card-img-top">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" alt="Mountains" onClick={handlefindDoctors} style={{width:"70%",cursor:"pointer"}}/>
              </div>
                 <div class="card-text">Connect within secs</div>
               </div>     
        </div>

         <div class="card-body column">
               <div className='card '>
               <div class="card-title">Find Doctors Near You</div>
               <div class="card-img-top">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="Mountains" onClick={handlefindDoctors} style={{width:"81%",cursor:"pointer"}}/>
              </div>
               
                 <div class="card-text">Take Appoinment</div>
              
               </div>
              
        </div>
            <div class="card-body column">
               <div className='card ' >
               <div class="card-title">Medicines</div>
               <div class="card-img-top">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" alt="Mountains" onClick={handleMedicines} style={{width:"86%",cursor:"pointer"}}/>
              </div>
             
                 <div class="card-text" style={{fontsize:"15px"}}>Essentials at your doorstep</div>
        
               </div>
              
        </div>
         <div class="card-body column">
               <div className='card '>
               <div class="card-title">Lab Test</div>
               <div class="card-img-top">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" onClick={handleMedicines} alt="Mountains" style={{width:"100%",cursor:"pointer"}}/>
              </div>
               
                 <div class="card-text" style={{fontsize:"13px"}}>Sample pickup at your home</div>
              
               </div>
              
        </div>
         <div class="card-body column">
               <div className='card'>
               <div class="card-title">Surgeries</div>
               <div class="card-img-top">
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" onClick={handlefindDoctors} alt="Mountains" style={{width:"80%",cursor:"pointer"}}/>
              </div>
             
                 <div class="card-text" >Safe and trusted surgery centers</div>
            
               </div>
              
        </div>
          </div>
      </div>
      <div className='container mt-3'>
          <h1>Book an appointment for an in-clinic consultation</h1>
          <p>Find experienced doctors across all specialties</p>
        <div className='column'>
         <img  src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" style={{width:"250px"}} alt=""/>
         <div>
         <h3>Dentist</h3>
          <p>Teething troubles? Schedule a dental checkup</p>
         </div>
        </div>
        <div className='column'>
         <img  src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"  style={{width:"250px"}} alt="" />
      <div>
      <h3>Gynecologist</h3>
        <p>Explore for women’s health, pregnancy and infertility treatments</p>
      </div>
        </div>

        <div className='column'>
         <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" style={{width:"250px"}} alt=""/>
         <div>
          <h3>Dietitian</h3>
        <p>Get guidance on eating right, weight management and sports nutrition</p>
      </div>
        </div>
        <div className='column'>
         <img  src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"  style={{width:"250px"}} alt=""/>
         <div>
         <h3>Physiotherapist</h3>
        <p>Pulled a muscle? Get it treated by a trained physiotherapist</p>
      </div>
        </div>
      </div>
    </div>

);
}

export default Home;