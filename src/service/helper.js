import axios from 'axios'

export const BASE_URL='http://localhost:8081';


export const DOCTOR_URL='http://localhost:8082';


export const APPOINTMENT_URL='http://localhost:8083';

export const myAxios= axios.create({

    baseURL:BASE_URL
})
export const docAxios= axios.create({

    baseURL:DOCTOR_URL
})
export const appAxios= axios.create({

    baseURL:APPOINTMENT_URL
})