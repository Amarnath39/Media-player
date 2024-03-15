import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Categories() {

  const [Category,setCategory]=useState({
    name:'',videos:[]
  })
  const [addStatus,setAddStatus]=useState({})
  


  const [show, setShow] = useState(false);

  const getCategory=(val)=>{
    if(val){
      setCategory({...Category,name:val})
    }
  }
  const handleAdd=async()=>{
    console.log(Category)
    if (Category.name){
      const res=await addCategory(Category)
      if(res.status>=200 && res.status<300){
        toast.success("Category added successfuly")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category added failed")
      }
    }
    else{
      toast.info("enter valid details")
    }
  }

  const handleClose = () => {
    setShow(false)
    setCategory({
      name:'',videos:[]
    })
  };
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
    <Button variant='primary' className='btn' onClick={handleShow}>Add category</Button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Add category</Form.Label>
            <Form.Control onChange={(e)=>{getCategory(e.target.value)}} type="text" placeholder="enter video category" />
          </Form.Group>
         </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>SAVE</Button>
        </Modal.Footer>
      </Modal>
    <Categorylist status={addStatus}  />
    </>

    )
}

export default Categories