
import Api from './Api';
import {POST_API} from '../constants/ApiName'

const config = {
    headers:{}
  };


export default{
    async getAllPostInfo(offset: number){
        const url = `${POST_API}${offset}`
        var response= await Api().get(url, config);
        return response.data;
    },
}