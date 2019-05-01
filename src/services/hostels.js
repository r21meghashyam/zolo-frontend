import request from '../utils/request';

export const create=async (payload)=>{
    let response = await request('POST','/hostel',payload);
    if(response.status===200)
        return response.data;
    else if(response.status)
        return response.message;
    else
        return null;
}
