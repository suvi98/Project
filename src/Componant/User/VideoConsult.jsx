import React from 'react';
import Nav from './Nav/Nav';
import './Style.css'

                    //this is mediines page ,for advertisment purpose
function VideoConsult() {

    return (
        <div id='videoConsult'>

            {/* loaded nav Componant */}
            <Nav/>


            <div className="row " >
                    <div className="col-md-12 ">
                        <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png" alt="" width={1200}/>
                    </div>
                 
                 <div className="container " style={{padding:"60px",display:"-webkit-inline-box"}}>

                    <div className="col-md-6" >
                        <div className="row vdo-card">
                            <span  className='vdo-hyper-span'>INTRODUCING CONSULTATION DESK</span>
                            <span className='vdo-span'>   Don’t self medicate. Talk to an expert. Consult a doctor in less than 2 minutes.</span>
                        </div>
                        <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-1.d328c6a9.png" alt="" width={550} className='vdo-card-img'/>
                    </div>
                    <div className="col-md-6" >
                        <div className="row vdo-card">
                            <span  className='vdo-hyper-span'>INTRODUCING FAST DELIVERY</span>
                            <span className='vdo-span'>  Tired of waiting in a queue? Too weak to go down and buy medicines?</span>
                        </div>
                        <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-2.5a0b85e1.png" alt="" width={550} className='vdo-card-img'/>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default VideoConsult;