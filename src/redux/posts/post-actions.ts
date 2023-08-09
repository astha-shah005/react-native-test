import postSlice from './post-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {PostModel} from "../../models/post-model";
import PostService from '../../services/postService';

export const postAction=postSlice.actions

export const fetchPostData=(offset: number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{  
                const response:PostModel=await PostService.getAllPostInfo(offset);
                dispatch(postAction.setPostData(response))
    }
}