// import React, { Component } from 'react';
// import Nav from './Nav'
// import AdminServices from '../../../service/AdminServices'

// class AddUser extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             aname:'',
//             aemail:'',
//             adpassword:''
//         }

//         this.handlechangeName = this.handlechangeName.bind(this);
//         this.handlechangeEmail = this.handlechangeEmail.bind(this);
//         this.handlechangePass = this.handlechangePass.bind(this);

//         this.saveEmployee = this.saveEmployee.bind(this);
//     }

//     saveEmployee = (e) =>{
//         e.preventDefault();
//         let userData = {aname:this.state.aname,
//                         aemail:this.state.aemail,
//                         adpassword:this.state.adpassword};
//               console.log('userData =>'+JSON.stringify(userData));     
              
//               AdminServices.creatAminDetails(userData).then(rse=>{
//                 alert("Data Added Successfully")
//               })    
//     }

//     handlechangeName=(event)=>{
//         this.setState({aname:event.target.value});
//     }
//     handlechangeEmail=(event)=>{
//         this.setState({aemail:event.target.value});
//     }
//     handlechangePass=(event)=>{
//         this.setState({adpassword:event.target.value});
//     }
   

//     render() {
//         return (
//             <div>
//             <Nav/>
//                <div className='container'>
//                  <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h3 className='text-center'>Add User</h3>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group">
//                                     <label> Name</label>
//                                     <input type="text" placeholder='UserName' name="aname" className='form-control'
//                                     value={this.state.aname} onChange={this.handlechangeName}/>
//                                 </div>
//                                 <div className="form-group mt-3">
//                                     <label> Email</label>
//                                     <input type="text" placeholder='Email' name="aemail" className='form-control'
//                                     value={this.state.aemail} onChange={this.handlechangeEmail}/>
//                                 </div>
//                                 <div className="form-group mt-3">
//                                     <label> Password</label>
//                                     <input type="text" placeholder='Password' name="adpassword" className='form-control'
//                                     value={this.state.adpassword} onChange={this.handlechangePass}/>
//                                 </div>
//                                 <button className='btn btn-success mt-3' onClick={this.saveEmployee}> Save </button>
                         
//                             </form>
//                         </div>
//                     </div>
//                  </div>
//                </div>
//         </div>
//         );
//     }
// }



// export default AddUser;


