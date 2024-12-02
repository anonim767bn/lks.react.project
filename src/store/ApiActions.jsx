import axios from "axios";
import { ApiUrls } from "../constants";

export const getNewsListAction = async function(){
    try{
        let response = await axios.get(ApiUrls.news);
        return response.data
    }
    catch(err){
        console.log(err)
        return []
    }
}


export const getServicesListAction = async function(){
    try{
        let response = await axios.get(ApiUrls.services);
        return response.data
    }
    catch(err){
        console.log(err)
        return []
    }
}

export const getServiceDetailAction = async function(id){
    try{
        let response = await axios.get(`${ApiUrls.services}/${id}`);
        return response.data
    }
    catch(err){
        console.log(err)
        return {}
    }
}
