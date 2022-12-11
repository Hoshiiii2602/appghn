import axios from 'axios';
import { BASE_URL } from '../constants';


export const giaoHangNhanhServices = {
    register: (params) => {
        return axios.post(`${BASE_URL}/informationUser`, { params }) // đã cấu hình base url rồi nên không cần viết nưa
    },
    getdataCourse : () => {
       return axios(`${BASE_URL}/course`)
    },
    getdataLogo : () => {
       return axios(`${BASE_URL}/logo`)
    }
}
