import axios from "axios";
import config from "../config/config.json"
import getAccessToken from './AccessToken';


/* const header=()=>{
    const token=localStorage.getItem("access-token");
    return {
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }
    
} */

export const getAvatar = (avatar) => {
    return new Promise((resolve, reject) => {
        axios({
            url : `${config.SERVER_URL}/getAvatar/${avatar}`,
            method : "GET",
            responseType : "blob"
        }).then((res) => {                    
            let blobfile = new File([res.data], "Profile")
            resolve({response:"success", file: blobfile})
        }).catch((err) => {
            resolve({response:"error", file: avatar})
        })
    }) 
}

//Upload image
export async function uploadFile(data) {
    return new Promise((resolve, reject) => {
        const formdata = new FormData(); 
        formdata.append('file', data[0]);
        axios.post(`${config.SERVER_URL}/uploadSingle`, formdata,{
          headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            resolve(res.data.filename)    
        }).catch((err) => {
            reject(err)
        })
    })
}

//Get All Packages
export async function getAllPackages() {
    return new Promise((resole, reject) => {
        axios.get(`${config.SERVER_URL}/packages/list`,
            {
                headers: {
                    'Authorization': `Bearer ${getAccessToken()}`
                }
            }).then((res) => {
                resole(res)
            }).catch((err) => {
                reject(err)
            })
    })
}
//Get All Services
export async function getAllServices() {
    return new Promise((resole, reject) => {
        axios.get(`${config.SERVER_URL}/services/list`,
            {
                headers: {
                    'Authorization': `Bearer ${getAccessToken()}`
                }
            }).then((res) => {
                resole(res)
            }).catch((err) => {
                reject(err)
            })
    })
}
//Create Contact
export const contactApi = (data) => {
    return new Promise((resolve,reject)=>{
        axios.post(`${config.SERVER_URL}/contact/create`,data)
        .then((res) =>{  
            resolve(res)
        }).catch((res) => {
            reject(res)
        })
    })

}     

//Create One Ways
export const onewayApi = (data) => {
    return new Promise((resolve,reject)=>{
        axios.post(`${config.SERVER_URL}/oneway/create`,data)
        .then((res) =>{  
            resolve(res)
        }).catch((res) => {
            reject(res)
        })
    })
}  

//Create One Ways
export const roundtripApi = (data) => {
    return new Promise((resolve,reject)=>{
        axios.post(`${config.SERVER_URL}/roundtrip/create`,data)
        .then((res) =>{  
            resolve(res)
        }).catch((res) => {
            reject(res)
        })
    })
}