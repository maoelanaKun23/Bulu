import * as axios from 'axios';
const IBM_CLIENT_ID = process.env.REACT_APP_X_IBM_CLIENT_ID
const axiosConfig = {
    timeout:30000,
    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        Accept:'application/json,application/pdf,application/octet-stream'
    },
};
//Set to true for enabling logging axios request and response
const logging = true;

//Initial Config API
const apiConfig = (token) => {
    // add token IBM_CLIENT_ID to Headers if token not null
    if(IBM_CLIENT_ID)axiosConfig.headers['x-ibm-client-id'] = IBM_CLIENT_ID;
    if(token)axiosConfig.headers.Authorization = `Bearer ${token}`;
    // if (process.env.REACT_APP_X_IBM_CLIENT_ID) axiosConfig.header['x-ibm-client-id'] = process.env.REACT_APP_X_IBM_CLIENT_ID;
    if(process.env.NODE_ENV === 'development') {
        console.log('configure',axiosConfig)
    }
    const axiosApi = axios.create(axiosConfig);
    if (logging){
        axiosApi.interceptors.request.use(request => {
            if(process.env.NODE_ENV === 'development') {
                console.log('Starting Request:',request)
            }
            return request;
        })
        axiosApi.interceptors.response.use(response => {
            if(process.env.NODE_ENV === 'development') {
                console.log('Response:',response)
            }
            return response;
        })
    }
    return axiosApi;
};

export default apiConfig;