import {PostModel} from "../../models/post-model";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialPostState:PostModel={
    articles: []
}

const postSlice=createSlice({
    name:'post',
    initialState:initialPostState,
    reducers:{
        setPostData(state,action:PayloadAction<PostModel>){
            state.articles = action.payload?.articles;
        }
    }
})
export default postSlice;