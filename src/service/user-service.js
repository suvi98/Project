import { myAxios, docAxios,appAxios} from "./helper";

                // Admin
    export const signUp =(user)=>{

        return myAxios
        .post("/admin/register",user)
        .then((response) => response.data);
    };

    export const LoginDetails =(data)=>{

        return myAxios
        .post("/admin/login",data)
        .then((response) => response.data);
    };

                // User

    export const signUpUser =(user)=>{

            return myAxios
            .post("/patient/register",user)
            .then((response) => response.data);
    };  
 
 export const LoginDetailsUser =(data)=>{

    return myAxios
    .post("/patient/login ",data)
    .then((response) => response.data);
};
    export const DoctorData =(data)=>{

        return docAxios
        .post("/doctor/findByPro ",data)
        .then((response) => response.data);
    };

    export const DoctorFindAll =()=>{

        return docAxios
        .get("/doctor/findAll ")
        .then((response) => response.data);
    };
    export const Status =(data)=>{

        return appAxios
        .post("/app/FindByApID",data)
        .then((response) => response.data);
    };