import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {
  const [history,setHistory] =useState([])
  const getAllHistory = async()=>{
    const result = await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllHistory()
  },[])

const deleteHistory = async(vId)=>{
  //api call
  await removeHistoryAPI(vId)
  getAllHistory()
}

  return (
    <>
    <div className="container mt-5 mb-5">
<div className="d-flex justify-content-between">
  <h3>Watch History</h3>
  <Link to={'/home'}><i style={{height:'17px'}} className='fa-solid fa-arrow-left me-2'></i>Back To <i style={{height:'17px'}} className=' ms-2 fa-solid fa-home'></i>
  </Link>
</div>

<table className='table mt-5 mb-5'>
<thead>
 <tr>
    <th>#</th>
    <th>Caption</th>
    <th>Video Link</th>
    <th>Time Stamp</th>
    <th><i style={{height:'17px'}} className='fa-solid fa-ellipsis-vertical'></i></th>
 
 </tr>
</thead>
<tbody>
 { history?.length>0? history?.map((videos,index)=>( <tr key={index}>
    <td>{index+1}</td>
    <td>{videos?.caption}</td>
    <td><a href={videos?.youtubeLink} target='-blank'>{videos?.youtubeLink}</a></td>
    <td>{videos?.timeStamp}</td>
    <td><button onClick={()=>deleteHistory(videos.id)} className='btn'><i style={{height:'17px'}} className='fa-solid fa-trash text-danger'></i></button></td>
   
  </tr>

 ))
  :
  <tr className='text-danger fw-bolder'>YOUR WATCH HISTORY IS EMPTY</tr>}
</tbody>
</table>
    </div>
    
    </>
  )
}

export default Watch