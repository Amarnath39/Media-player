import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo,addHistory } from '../services/allApis';
import { toast } from 'react-toastify';

function VideoCard({video,setDelStatus,cat}) {
    const [show, setShow] = useState(false);
    
    const [history,setHistory]=useState({
      caption:video.caption,url:video.url,datetime:''
    })

    const handleDelete=async(id)=>{
      console.log(id)
      const res=await deleteVideo(id)
      console.log(res)
      if(res.status>=200 && res.status<300){
        setDelStatus(res)
        toast.success("video deleted successfully")
      }
      else{
        toast.error("Video deletion failed!!")
      }
    }

    const handleOndrag=(e,id)=>{
      console.log("video is dragging:id:"+id)
      e.dataTransfer.setData("videoId",id)
    }

  const handleClose = () => {
    addHistory(history)
    setShow(false)
  };
  const handleShow = () => {
    const dt=new Date()
    setHistory({...history,datetime: Date()})
    setShow(true)
  };
  return (

    <>
     <Card style={cat?{width:'10rem'}:{width:'18rem'}} className='ms-3 mb-3 p-2' draggable onDragStart={(e)=>{handleOndrag(e,video?.id)}}> 
      <Card.Img variant="top" src={video.image} style={{height:'170px'}}  onClick={handleShow} />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title className='text-break'>{video.caption}</Card.Title>
        {/* <span>  */}
        {
          !cat &&
        <i class="fa-solid fa-trash" style={{}} onClick={()=>{handleDelete(video.id)}}></i>
        }
        {/* // </span> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning font-italic'>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    
    </>
  )
}

export default VideoCard