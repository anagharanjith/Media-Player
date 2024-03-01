import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setuploadVideo] = useState({
    caption: "", imageURL: "", youtubeLink: ""
  })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setuploadVideo({ ...uploadVideo, caption: "", imageURL: "", youtubeLink: "" })
  }
  const handleShow = () => setShow(true);
  console.log(uploadVideo);
  const getYoutubeEmbedLink = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setuploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${videoId}` })
    } else {
      setuploadVideo({ ...uploadVideo, youtubeLink: "" })
      alert("INPUT PROPER LINK!!!")
    }
  }
  const handleUpload = async () => {
    //store upload video in http:localhost:3000/videos
    const { caption, imageURL, youtubeLink } = uploadVideo
    if (caption && imageURL && youtubeLink) {
      //proceed to store video from localhost:5173/home to localhost:3000/videos
      const result = await uploadVideoAPI(uploadVideo)  
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`Video'${result.data.caption}'uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()


      } else {
        alert("API call Failed ...Please try after some time!!!")
      }
    } else {
      alert("please fill the form completelly!!!")
    }
  }

  return (

    <>
      <div className="d-flex">
        <h5>Upload A Video</h5>
        <button onClick={handleShow} style={{ width: '50px', height: '45px' }} className="btn rounded bg-secondary ms-2 rounded-square"><i style={{height:'17px',color:'white'}}  class="fa-solid fa-plus"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details!!!</p>
          <div className='border rounded border-secondary p-3'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.caption} onChange={e => setuploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInputCaption"
              label="Image Url"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.imageURL} onChange={e => setuploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="Image Url" />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInputCaption"
              label="Youtube video link"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube video link" />
            </FloatingLabel>






          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">UPload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add