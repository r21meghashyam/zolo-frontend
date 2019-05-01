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

export const getAll=async ()=>{
    let response = await request('GET','/hostels');
    if(response.status===200)
        return response.data;
    else if(response.status)
        return []
    else
        return [];
}

export const get=async (hostel_id)=>{
    let response = await request('GET',`/hostel/${hostel_id}`);
    if(response.status===200)
        return response.data;
    else if(response.status)
        return response.message
    else
        return null;
}