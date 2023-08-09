
import Api from './Api';
import {LOGIN_API} from '../constants/ApiName'

interface loginType {
    user: { email: string, password: string }
}

const config = {
    headers:{}
  };


export default{
    async postLogin(data: loginType){
        var response= await Api().post(LOGIN_API,data, config);
        return response.data;
    },
}