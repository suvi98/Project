import React from 'react';
import Nav from '../Componant/User/Nav/Nav'
import Home from '../Componant/User/Home'


//this is user side home page
function HomePageUser() {
    return (
        <div>
            {/* loaded nav Componant at top of page */}
            <Nav/>

             {/* loaded home Componant  */}
            <Home/>
        </div>
    );
}

export default HomePageUser;