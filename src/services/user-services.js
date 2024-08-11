import { myAxios } from "./helper";

export const Doctorsignup = (doctor)=>{
    return myAxios
    .post('doctor/new',doctor)
    .then((response)=> response.data);
};
export const PatientSignup =(patient)=>{
    return myAxios
    .post('/Patient/create-Patient',patient)
    .then((response)=> response.data);
};
export const ShopKeeperSignup=(shopkeeper)=>{
    return myAxios.post('',shopkeeper)
    .then((response)=>response.data);
}
