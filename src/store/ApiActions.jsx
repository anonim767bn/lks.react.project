import axios from "axios";
import { ApiUrls } from "../constants";

export const getNewsListAction = async function(){
    let response = await axios.get(ApiUrls.news);
    return response.data
}