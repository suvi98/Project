import React from 'react';
import UserCrud from '../Componant/Admin/UserCrud'
import HeaderUser from '../Componant/Admin/HeaderUser';

            // this is admin side home page
function Home() {
    return (
        <div>
        
                <div className="">
                     {/* loaded navigation  Componant  at top of page */}
                    <HeaderUser/>
                    <div>

                         {/* loaded usercrud Componant  */}
                        <UserCrud/>
                    </div>
                </div>
           
        </div>
    );
}

export default Home;