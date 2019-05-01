import request from '../utils/request';

export const register=async (email,password)=>{
    let response = await request('POST','/register',{email,password});
    if(response.status===200)
        return response.data;
    else if(response.status)
        return response.message;
    else
        return null;
}

export const login=async (email,password)=>{
    let response = await request('POST','/login',{email,password});
    if(response.status===200)
        return response.data;
    else if(response.status)
        return response.message;
    else
        return null;
}
