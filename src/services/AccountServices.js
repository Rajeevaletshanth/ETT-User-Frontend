import axios from 'axios';
import config from "../config/config.json"
import getAccessToken from './AccessToken';

export async function changePassword (id, data) {
    return new Promise((resolve, reject) => {
        axios.put(`${config.SERVER_URL}/users/change_password/${id}`, data,
        {headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        }).then((res) => {                           
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
//User Profile
export async function getUserDet (id) {
    return new Promise((resolve, reject) => {
        axios.get(`${config.SERVER_URL}/users/${id}`, 
        {headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        }).then((res) => {                           
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    }) 
}
export async function editUserDet (id, data) {
    return new Promise((resolve, reject) => {
        axios.put(`${config.SERVER_URL}/users/edit/${id}`, data,
        {headers: {
                'Authorization': `Bearer ${getAccessToken()}`
            }
        }).then((res) => {                           
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
