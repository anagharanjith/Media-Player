import { commonAPI } from './commonAPI'
import { SERVER_URL } from './server_url'

//Add component-upload video -store in http://localhost:3000/videos

export const uploadVideoAPI =async(video)=>{
    //send request to add compomnent
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}
//get video called by view component
export const getAllVideosAPI =async()=>{
    
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

//store watch history by videocard to localhost:3000/history
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch componenetto localhost:3000/history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history to watch component
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})

}
//remove video 
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})

}

//save category
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

//get category
export const getCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category 
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})

}

//get single video
export const getAVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")

}

//update category API
export const updateCategoryAPI = async (categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails) 
}

//get single category api
export const getSingleCategoryAPI = async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}
