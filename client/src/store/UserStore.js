import { create } from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../utility/utility.js";

const UserStore = create((set) => ({
    UserOTPRequest:async(email)=>{
        let res=await axios.get(`/api/v1/userOTP/${email}`);
        setEmail(email);
        return res.data['status']==="success";
        },


    VerifyLoginRequest:async(otp)=>{
        let email=getEmail();
        let res=await axios.get(`/api/v1/VeryfyLogin/${email}/${otp}`);
        return res.data['status']==="success";
    },


}))
export default UserStore;