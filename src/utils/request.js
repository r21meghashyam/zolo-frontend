import constants from './constants';

const request=async (method,path,payload)=>{
    try{
        let response = await fetch(`${constants.server}${path}`,{
            method,
            credentials:"include",
            headers:{
                "content-type":"application/json",
                "accept":"application/json"
            },
            body:JSON.stringify(payload)
        });
        return await response.json();
    }
    catch(err){
        return {
            status:0,
            message: "Error:"+err.message
        }
    }
}

export default request;