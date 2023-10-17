import axios from "axios";

const URL= "http://localhost:8081/admin/get";

class AdminServices {

    getAdminDetails(){
        return axios.get(URL)
    }

    creatAminDetails(userData){

        return axios.post("http://localhost:8081/admin/register",userData)
    }
}

export default new AdminServices();