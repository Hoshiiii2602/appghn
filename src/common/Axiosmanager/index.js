import axios, {AxiosResponse} from 'axios'
import QueryString  from 'qs'

const BASE_URL = 'https://appghn.herokuapp.com'

export function AxiosManager() {
    const token =  'aaaaaaaaaaaaaa' // token  Auth

    //default 

    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.common.domain = window.location.host;

    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    axios.defaults.paramsSerializer = (params) => {
        return QueryString.stringify(params, {arrayFormat: 'repeat'})
    }

    axios.interceptors.response.use(
        (response) => responseSuccessHandle(response),
        (error) => responseErrorHandle(error)
    )
    
    return null

}


// xu ly ham tra ve reponse
const responseSuccessHandle = (response) => response

// xu ly khi logout, loi Auth ......
const responseErrorHandle = (error) => {
    return Promise.reject(error)
}

