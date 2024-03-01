import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category({removeCategoryVideoResponse}) {
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const [allCategories,setAllCategories] =useState([])
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }

  const handleShow = () => setShow(true);
  const handleAddCategory= async()=>
  {
    if(categoryName){
      await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllcategories()
    }
    else{
      alert("Please Fill the Form")
    }
  }
  
  const getAllcategories = async ()=>{
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }

  console.log(allCategories)

  useEffect(()=>{
    getAllcategories()
    },[removeCategoryVideoResponse])

  const handleRemoveCategory=async(cId)=>{
    await removeCategoryAPI(cId)
    getAllcategories()
  }
  const dragOverCategory = (e) =>{
    e.preventDefault()
    console.log("Dragging Over Category")
  }
  const videoDropped = async(e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`Video Dropped with vId : ${videoId},inside category Id: ${categoryId}`);
    //get detail of video to be dropped
    const {data} = await getAVideoAPI(videoId)
    console.log(data)
    //get category details where we have add video
    let selectedCategory = allCategories.find(item=>item.id==categoryId)
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllcategories()

  }
  const  videoDragStarted = (e,videoId,categoryId)=>{
    console.log(`Drag started from Category id: ${categoryId} with video id: ${videoId}`)
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }

  return (
    <>
    <div className="d-flex justify-content-between mb-3">
        <h3 style={{height:'50px'}}>All Categories</h3>
        <button onClick={handleShow} style={{width:'50px',height:'50px'}} className="btn rounded  ms-2 rounded-circle btn-info"><i style={{height:'17px',color:'white'}} class="fa-solid fa-plus"></i></button>
    </div>
    <div className="container-fluid mt-3">
      { allCategories.length>0? allCategories.map((item,index)=>(
        <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-3">
           <div className='d-flex  justify-content-between '>
            <h5>{item.categoryName}</h5>
            <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i style={{height:'17px'}} className="fa-solid fa-trash text-danger"></i></button>
            </div> 
          <div className="row m-3">
          {
            item.allVideos?.length>0 &&
            item.allVideos?.map((video,index)=>(
              <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                <VideoCard insideCategory = {true} displayData={video}/>
              </div>
            ))
          }
          </div>
          </div>
          ))
          :<div className='text-warning fw-bolder'>No Categories Added yet</div>
      }
    </div>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please Fill The Following Details!!!</p>
         <div className='border rounded border-secondary p-3'>
         <FloatingLabel
        controlId="floatingInputCaption"
        label="Category Label"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Video Caption" />
      </FloatingLabel>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category