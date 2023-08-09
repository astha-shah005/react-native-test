
import Api from './Api';
import {GET_COMMENT} from '../constants/ApiName'

interface commentType{
    comment: { body: string }
}

const config = {
    headers:{}
  };


export default{
    async getComments(slug: string){
        const url = `${GET_COMMENT}/${slug}/comments`
        var response= await Api().get(url, config);
        return response.data;
    },
    async postComments(slug:string, data: commentType){
        const url = `${GET_COMMENT}/${slug}/comments`
        var response= await Api().post(url, data, config);
        return response.data;
    },
    async deletComment(slug:string, id: string){
        const url = `${GET_COMMENT}/${slug}/comments/${id}`
        var response= await Api().delete(url, config);
        return response.data;
    },
}